f n = sum . map (\x -> x ^ 2) . take n . filter odd

f n = foldr (+) 0 . map (\x -> x ^ 2) . take n . filter odd
