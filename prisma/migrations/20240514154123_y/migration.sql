-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('COMPANY', 'COMMON', 'RECRUITER');

-- CreateTable
CREATE TABLE "accounts_users" (
    "id" TEXT NOT NULL,
    "firebase_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "type" "UserType" NOT NULL,
    "company_id" TEXT,
    "userId" TEXT,
    "recruiter_id" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "accounts_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "profile_image" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "profileImage" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "seniority" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recruiters" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "profileImage" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "recruiters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_vacancies" (
    "id" TEXT NOT NULL,
    "company_id" TEXT,
    "recruiter_id" TEXT,
    "position" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "position_type" TEXT NOT NULL,
    "external_link" TEXT NOT NULL,
    "vacancy_type" TEXT NOT NULL,
    "salary_range" TEXT NOT NULL,
    "open" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "job_vacancies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_applications" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "vacancyId" TEXT NOT NULL,
    "applied_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "job_applications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolios" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "portfolios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experiences" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "experiences_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_users_firebase_id_key" ON "accounts_users"("firebase_id");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_users_email_key" ON "accounts_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "companies_user_id_key" ON "companies"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_user_id_key" ON "users"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "recruiters_user_id_key" ON "recruiters"("user_id");

-- AddForeignKey
ALTER TABLE "accounts_users" ADD CONSTRAINT "accounts_users_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts_users" ADD CONSTRAINT "accounts_users_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts_users" ADD CONSTRAINT "accounts_users_recruiter_id_fkey" FOREIGN KEY ("recruiter_id") REFERENCES "recruiters"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_vacancies" ADD CONSTRAINT "job_vacancies_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_vacancies" ADD CONSTRAINT "job_vacancies_recruiter_id_fkey" FOREIGN KEY ("recruiter_id") REFERENCES "recruiters"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_applications" ADD CONSTRAINT "job_applications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_applications" ADD CONSTRAINT "job_applications_vacancyId_fkey" FOREIGN KEY ("vacancyId") REFERENCES "job_vacancies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolios" ADD CONSTRAINT "portfolios_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experiences" ADD CONSTRAINT "experiences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
