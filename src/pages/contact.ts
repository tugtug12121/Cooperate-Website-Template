import { Request, Response } from "express";

export default function contact(req: Request, res: Response): void {
  const success = req.query.success === "1";

  res.send(`
<html>
  <head>
    <title>ContactUs</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

    <style>
      body{
        margin:0;
        font-family:Arial,sans-serif;
        background:#f5f7fb;
        overflow-x:hidden;
      }

      /* HEADER */
      .header{
        position:sticky;
        top:0;
        z-index:1000;
        backdrop-filter:blur(12px);
        background:rgba(255,255,255,0.9);
        border-bottom:1px solid rgba(0,0,0,0.08);
        padding:14px 32px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        box-shadow:0 4px 20px rgba(0,0,0,0.05);
      }
      .header-brand{
        font-size:1.8rem;
        font-weight:700;
        color:#0052cc;
        letter-spacing:-0.5px;
        cursor:pointer;
        transition:0.25s;
        text-decoration:none;
      }
      .header-brand:hover{
        opacity:0.7;
      }

      /* Animations */
      @keyframes fadeUp{
        from{opacity:0;transform:translateY(20px);}
        to{opacity:1;transform:translateY(0);}
      }
      @keyframes float{
        0%{transform:translateY(0);}
        50%{transform:translateY(-20px);}
        100%{transform:translateY(0);}
      }

      /* Floating shapes */
      .shape{
        position:absolute;
        border-radius:50%;
        opacity:0.15;
        animation:float 6s ease-in-out infinite;
      }
      .shape-blue{
        width:140px;height:140px;
        background:#0052cc;
        top:80px;left:-40px;
      }
      .shape-purple{
        width:180px;height:180px;
        background:#7b4dff;
        bottom:120px;right:-60px;
      }

      /* Hero */
      .hero{
        text-align:center;
        padding:90px 20px 50px;
        animation:fadeUp 0.8s ease forwards;
      }
      .hero-title{
        font-size:2.6rem;
        font-weight:700;
        color:#0b1f3b;
        letter-spacing:-0.5px;
      }
      .hero-sub{
        max-width:650px;
        margin:18px auto 0;
        color:#6c7a91;
        font-size:1.1rem;
        line-height:1.7;
      }

      /* Card */
      .contact-card{
        border-radius:20px;
        border:none;
        box-shadow:0 12px 40px rgba(0,0,0,0.07);
        transition:0.35s ease;
        animation:fadeUp 1s ease forwards;
      }
      .contact-card:hover{
        transform:translateY(-6px);
        box-shadow:0 18px 50px rgba(0,0,0,0.1);
      }

      /* Inputs */
      .form-control, .form-select{
        padding:14px;
        border-radius:10px;
        border:1px solid #d6d9e0;
        transition:0.25s;
      }
      .form-control:focus, .form-select:focus{
        border-color:#0052cc;
        box-shadow:0 0 0 0.15rem rgba(0,82,204,0.25);
      }

      /* Button */
      .contact-btn{
        background:#0052cc;
        border:none;
        border-radius:12px;
        padding:14px;
        font-weight:600;
        color:white;
        transition:0.25s;
        box-shadow:0 10px 24px rgba(0,82,204,0.25);
      }
      .contact-btn:hover{
        background:#003f99;
        box-shadow:0 12px 30px rgba(0,63,153,0.35);
      }

      /* Required field warnings */
      .invalid-feedback{
        display:block;
        font-size:0.85rem;
        margin-top:4px;
      }
    </style>
  </head>

  <body>

    <!-- HEADER -->
    <header class="header">
      <a href="/" class="header-brand">CorpBrand</a>
    </header>

    <!-- Floating graphics -->
    <div class="shape shape-blue"></div>
    <div class="shape shape-purple"></div>

    <!-- HERO -->
    <div class="hero">
      <div class="hero-title">We’re Here To Help</div>
      <div class="hero-sub">
        Choose your enquiry type and send us a message. Our team responds within one business day.
      </div>
    </div>

    <!-- FORM -->
    <div class="container pb-5" style="animation:fadeUp 1s ease;">
      <div class="row justify-content-center">
        <div class="col-lg-7">

          <div class="card contact-card p-4 p-md-5">

            <h3 class="text-center mb-4" style="font-weight:700;color:#0b1f3b;">Contact Our Team</h3>

            ${success ? `
              <div class="alert alert-success mb-4">
                Your message has been sent. We’ll reply shortly.
              </div>
            ` : ""}

            <form method="POST" action="/contact" onsubmit="return validateForm()">

              <div class="mb-4">
                <label class="form-label fw-semibold">Your Name</label>
                <input type="text" name="name" class="form-control" id="name">
                <div class="invalid-feedback" id="nameError"></div>
              </div>

              <div class="mb-4">
                <label class="form-label fw-semibold">Email Address</label>
                <input type="email" name="email" class="form-control" id="email">
                <div class="invalid-feedback" id="emailError"></div>
              </div>

              <div class="mb-4">
                <label class="form-label fw-semibold">Enquiry Type</label>
                <select name="type" class="form-select" id="type">
                  <option value="">Select One</option>
                  <option value="General">General Enquiry</option>
                  <option value="Support">Support Request</option>
                  <option value="Partnership">Partnership Opportunity</option>
                  <option value="Billing">Billing Question</option>
                  <option value="Technical">Technical Issue</option>
                </select>
                <div class="invalid-feedback" id="typeError"></div>
              </div>

              <div class="mb-4">
                <label class="form-label fw-semibold">Message</label>
                <textarea name="message" class="form-control" rows="6" id="message"></textarea>
                <div class="invalid-feedback" id="messageError"></div>
              </div>

              <button class="contact-btn w-100 mt-2">Send Message</button>

            </form>

          </div>

        </div>
      </div>
    </div>

    <!-- Client-side validation -->
    <script>
      function validateForm(){
        let valid = true;

        const fields = [
          { id:"name", error:"nameError", msg:"Please enter your name." },
          { id:"email", error:"emailError", msg:"Please enter a valid email." },
          { id:"type", error:"typeError", msg:"Please select an enquiry type." },
          { id:"message", error:"messageError", msg:"Please enter a message." }
        ];

        fields.forEach(f => {
          const el = document.getElementById(f.id);
          const err = document.getElementById(f.error);

          if(!el.value.trim()){
            err.textContent = f.msg;
            el.style.borderColor = "#d9534f";
            valid = false;
          } else {
            err.textContent = "";
            el.style.borderColor = "#d6d9e0";
          }
        });

        return valid;
      }
    </script>

  </body>
</html>
  `);
}
