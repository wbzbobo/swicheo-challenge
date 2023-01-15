SELECT address FROM
(
 SELECT t.address,b.denom, b.amount
 FROM trades t INNER JOIN balances b
 ON t.address = b.address
 WHERE t.block_height > 730000) n
GROUP BY address
HAVING SUM(amount * (CASE denom 
     WHEN 'usdc' THEN 0.000001
     WHEN 'swth' THEN 0.00000005
     WHEN 'tmz' THEN 0.003 END)) >= 500