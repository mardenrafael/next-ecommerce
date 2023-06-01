-- CreateTable
CREATE TABLE "products" (
    "pro_id" UUID NOT NULL,
    "pro_name" TEXT NOT NULL,
    "pro_image" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("pro_id")
);
