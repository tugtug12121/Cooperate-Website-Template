import { Request, Response } from "express";

export default function post(req: Request, res: Response) {
  res.send("Blog post page");
}
