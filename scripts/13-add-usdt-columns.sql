-- Add USDT support to payments table

-- First, add the new columns if they don't exist
ALTER TABLE payments 
ADD COLUMN IF NOT EXISTS usdt_wallet_address TEXT,
ADD COLUMN IF NOT EXISTS usdt_transaction_hash TEXT,
ADD COLUMN IF NOT EXISTS usdt_amount DECIMAL(18, 8);

-- Update the payment_method constraint to include 'usdt'
-- First drop the existing constraint
ALTER TABLE payments DROP CONSTRAINT IF EXISTS payments_payment_method_check;

-- Add the new constraint with 'usdt' included
ALTER TABLE payments ADD CONSTRAINT payments_payment_method_check 
CHECK (payment_method IN ('card', 'bank_transfer', 'paypal', 'usdt', 'other'));

-- Also update the payment_methods table constraint
ALTER TABLE payment_methods DROP CONSTRAINT IF EXISTS payment_methods_type_check;
ALTER TABLE payment_methods ADD CONSTRAINT payment_methods_type_check 
CHECK (type IN ('card', 'bank_transfer', 'paypal', 'usdt', 'other'));

-- Create indexes for the new columns
CREATE INDEX IF NOT EXISTS idx_payments_usdt_wallet ON payments(usdt_wallet_address);
CREATE INDEX IF NOT EXISTS idx_payments_usdt_hash ON payments(usdt_transaction_hash);
