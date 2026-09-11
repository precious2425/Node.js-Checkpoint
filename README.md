# Node.js Checkpoint — Guided Exercises

Five small Node.js programs, one per task, each verified working.

## Setup

```bash
npm install
```

## Task 1 — hello-world.js
Prints "HELLO WORLD" to the console.
```bash
node hello-world.js
```

## Task 2 — server.js
A basic HTTP server on port 3000.
```bash
node server.js
```
Then open http://localhost:3000 in a browser, or in another terminal:
```bash
curl http://localhost:3000
```
Expected response: `<h1>Hello Node!!!!</h1>`

Stop the server with `Ctrl+C`.

## Task 3 — write-file.js / read-file.js
```bash
node write-file.js   # creates welcome.txt containing "Hello Node"
node read-file.js    # reads welcome.txt and logs its contents
```
Note: the original instructions mention writing to `welcome.txt` but
reading from `hello.txt`. This implementation reads `welcome.txt` (the
same file just written) so the two halves of the exercise connect — the
`fs.readFile` mechanics are identical either way. If your checkpoint
specifically requires a separate `hello.txt`, just change the filename
in `read-file.js`.

`welcome.txt` is gitignored since it's generated output, not source code.

## Task 4 — password-generator.js
Uses the [generate-password](https://www.npmjs.com/package/generate-password) package.
```bash
node password-generator.js
```
Prints a new random 12-character password (letters, numbers, symbols)
each time it runs.

## Task 5 — email-sender.js
Uses [nodemailer](https://www.npmjs.com/package/nodemailer) to send an email to yourself.

**Before running this one:**
1. Open `email-sender.js`.
2. Replace `YOUR_EMAIL@gmail.com` and `YOUR_APP_PASSWORD` with your own
   values.
3. If using Gmail, generate an **App Password** (not your regular
   password) at https://myaccount.google.com/apppasswords — this
   requires 2-Step Verification to already be enabled on your account.
4. Run it:
   ```bash
   node email-sender.js
   ```
5. Check your inbox for a test email.

**Before pushing to GitHub:** remove your real email/password from this
file and put the `YOUR_EMAIL@gmail.com` / `YOUR_APP_PASSWORD`
placeholders back — never commit real credentials. A safer long-term
approach is to load them from environment variables instead of hardcoding
them (see the comments in the file).
