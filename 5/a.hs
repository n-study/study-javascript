-- f :: Integral c => Int -> [c] -> c
f n = sum . map (\x -> x ^ 2) . take n . filter odd

-- f :: Integral c => Int -> [c] -> c
f n = foldr (+) 0 . map (\x -> x ^ 2) . take n . filter odd
