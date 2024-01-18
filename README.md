## Run the development server on port 3000

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database

**Postgres on**: https://neon.tech/

### To generate a new schema

```bash
npx prisma generate
```

### To update the schema on the db

```bash
npx prisma db push
```

Sometimes the database will be reset.

### To reset the database

```bash
npx prisma migrate reset
npx prisma generate
npx prisma db push
```

### To see the data in the database

```bash
npx prisma studio
```

## Email sender

**Resend**: https://resend.com/

## .env file

These strings are provided by neon

```bash
DATABASE_URL=
DIRECT_URL=
```

This is a random string

```bash
AUTH_SECRET=
```

You can create one with this command on your shell:

```bash
openssl rand -base64 32
```

These strings are provided by Github : Settings > Developer settings > OAuth Apps > New OAuth App. In the homepage url put: http://localhost:3000. In the Authorization callback URL put: http://localhost:3000/api/auth/callback/github

```bash
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

These strings are provided by Google Cloud Services

```bash
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

This string is provided by Resend

```bash
RESEND_API_KEY="..."
```

# I used register.it for the domain
