# Migration Blueprint: GitHub Pages to Cloudflare Pages (Spring 2028)

*Target Execution Date: Post-Graduation, Spring 2028*

---

## 1. Why the Zero-Lock-In Architecture Makes This Easy
This portfolio is built on **Astro** in pure static output mode (`output: 'static'`). 
When you run `npm run build`, it compiles strictly to standard HTML, CSS, client-side JS, and SVG assets inside the `dist/` directory.

Because there is zero proprietary hosting code:
- **No code refactoring** is needed.
- **No framework migration** is needed.
- You can move between GitHub Pages, Cloudflare Pages, Vercel, or a custom VPS in minutes.

---

## 2. Step-by-Step Migration Guide (Spring 2028)

### Step 1: Create a Free Cloudflare Account
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) and sign up for a free account.
2. Under **Workers & Pages**, click **Create application** &rarr; **Pages** &rarr; **Connect to Git**.

### Step 2: Connect the Repository
1. Select your GitHub account and authorize access to your portfolio repository.
2. Configure build settings:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `20` (add environment variable `NODE_VERSION: 20` if needed)
3. Click **Save and Deploy**. Cloudflare Pages will build the site in ~30 seconds on their global edge network.

### Step 3: Attach Custom Domain
1. In Cloudflare Pages dashboard &rarr; **Custom domains** &rarr; click **Set up a custom domain**.
2. Enter your domain (e.g., `dominic.dev` or `dominichatcher.com`).
3. If your domain's DNS is managed on Cloudflare, it configures SSL and DNS records automatically with 1-click.

### Step 4: Deactivate GitHub Pages
1. In GitHub repository &rarr; **Settings** &rarr; **Pages** &rarr; set Source to **None** (or leave workflow inactive).
2. All traffic will now seamlessly resolve through Cloudflare's Anycast edge network with unlimited bandwidth and DDoS protection.

---

## 3. Post-Graduation Upgrades Unlocked on Cloudflare
Once on Cloudflare Pages, you can optionally unlock:
- **Edge Worker Contact Form**: Add a lightweight serverless handler inside `./functions/api/contact.ts` to receive contact form submissions and send alerts to your email without third-party services.
- **Serverless Analytics**: Privacy-first, cookie-less edge analytics without adding tracking scripts.
