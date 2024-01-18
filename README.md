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

### Email sender

**Resend**: https://resend.com/

### On the .env file you have to put:

#### 1. DATABASE_URL and DIRECT_URL from neon

#### 2. AUTH_SECRET: a random string

#### 3. GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET

#### 4. RESEND_API_KEY
