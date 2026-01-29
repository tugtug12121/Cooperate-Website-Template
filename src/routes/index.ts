import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

// Resolve pages directory from project root
const pagesDir = path.join(process.cwd(), "src", "pages");
console.log("🔍 Scanning pages in:", pagesDir);

if (!fs.existsSync(pagesDir)) {
  console.error("❌ Pages directory not found:", pagesDir);
  process.exit(1);
}

// SAFE: No regex literals (prevents TS errors)
const dynamicParam = new RegExp("\\[(.+?)\\]", "g");          // [id]
const catchAllParam = new RegExp("\\[\\.\\.\\.(.+?)\\]", "g"); // [...slug] 

// Convert dynamic filenames → Express routes
function convertDynamic(name: string) {
  return name
    .replace(dynamicParam, ":$1")
    .replace(catchAllParam, "*");
}

// Walk the pages directory
function walk(dir: string, baseRoute = "") {
  const entries = fs.readdirSync(dir);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    // Recurse into folders
    if (stat.isDirectory()) {
      walk(fullPath, path.join(baseRoute, entry));
      continue;
    }

    // Only accept .ts or .js
    if (!entry.endsWith(".ts") && !entry.endsWith(".js")) continue;

    const fileName = entry.replace(/\.ts$|\.js$/g, "");

    const isMiddleware = fileName === "_middleware";
    const isLayout = fileName === "_layout";

    // Compute route path
    let routePath =
      fileName === "index"
        ? baseRoute
        : path.join(baseRoute, convertDynamic(fileName));

    routePath = routePath.replace(/\\/g, "/");
    if (!routePath.startsWith("/")) routePath = "/" + routePath;

    import(fullPath).then((mod) => {
      // -------------------------
      // FOLDER MIDDLEWARE SUPPORT
      // -------------------------
      if (isMiddleware && typeof mod.default === "function") {
        router.use(baseRoute || "/", mod.default);
        console.log(`🧩 Middleware applied to ${baseRoute || "/"}`);
        return;
      }

      // -------------------------
      // LAYOUT SUPPORT
      // -------------------------
      let layout: ((html: string) => string) | null = null;
      if (isLayout && typeof mod.default === "function") {
        layout = mod.default;
        console.log(`🎨 Layout detected for ${baseRoute || "/"}`);
        return;
      }

      // -------------------------
      // GET HANDLER
      // -------------------------
      if (typeof mod.default === "function") {
        router.get(routePath, async (req, res, next) => {
          try {
            const result = await mod.default(req, res);

            // Prevent double-send errors
            if (res.headersSent) return;

            if (typeof result === "string") {
              res.send(layout ? layout(result) : result);
            }
          } catch (err) {
            next(err);
          }
        });

        console.log(`📌 Registered GET ${routePath}`);
      }

      // -------------------------
      // POST HANDLER
      // -------------------------
      if (typeof mod.POST === "function") {
        router.post(routePath, async (req, res, next) => {
          try {
            const result = await mod.POST(req, res);

            if (res.headersSent) return;

            if (typeof result === "string") {
              res.send(result);
            }
          } catch (err) {
            next(err);
          }
        });

        console.log(`📌 Registered POST ${routePath}`);
      }

      // -------------------------
      // PUT HANDLER
      // -------------------------
      if (typeof mod.PUT === "function") {
        router.put(routePath, async (req, res, next) => {
          try {
            const result = await mod.PUT(req, res);

            if (res.headersSent) return;

            if (typeof result === "string") {
              res.send(result);
            }
          } catch (err) {
            next(err);
          }
        });

        console.log(`📌 Registered PUT ${routePath}`);
      }

      // -------------------------
      // DELETE HANDLER
      // -------------------------
      if (typeof mod.DELETE === "function") {
        router.delete(routePath, async (req, res, next) => {
          try {
            const result = await mod.DELETE(req, res);

            if (res.headersSent) return;

            if (typeof result === "string") {
              res.send(result);
            }
          } catch (err) {
            next(err);
          }
        });

        console.log(`📌 Registered DELETE ${routePath}`);
      }
    });
  }
}

walk(pagesDir);

export default router;
