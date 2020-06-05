Furthermore, the graph below shows that **Democrats are more prolific tweeters than Republicans** in general across all topics. This could be due to a gap in the demographics of Republican and Democrat politicians, as Democrats tend to be younger and have younger followers than Republicans.

![Democrats Tweet more than Republicans Per Bill Chart](https://github.com/annsudhart/annsudhart.github.io/blob/source/public/case-studies/images/tweet-count-party.png?raw=true)

So now we get to answering the question we had at the beginning- **how do these tweets relate to the voting patterns of these politicians**? After loading the CSVs with votes for each politician, we compare whether their sentiment scores were positive or negative with whether they voted yes or no on an issue to create a ‘consistency score’.

![Consistency Score code](https://github.com/annsudhart/annsudhart.github.io/blob/source/public/case-studies/images/consistency-score-code.png?raw=true)

![Average Consistency Score By Bill Graph](https://github.com/annsudhart/annsudhart.github.io/blob/source/public/case-studies/images/consistency-score-by-bill.png?raw=true)

The average consistency scores are around or below 0.5, and **even with those low scores Republicans are more consistent with their voting and tweeting patterns** in comparison to Democrats who have lower overall consistency scores. In general though, there is a higher consistency score for Republicans compared to Democrats. 

Interestingly, the areas where the consistency scores are the lowest for Democrats are the Health Care Act and Violence Against Women Reauthorization Act, most likely due to the fact that our sentiment analysis was **not able to pick up the fact that many Democrats used highly polarized language when discussing this issue.**S Furthermore, the Save the Internet Act and the Background Check for Firearms were where Republicans had the lowest consistency scores. It could be reflective of the language used for firearms, and tweets related to the Save the Internet Act are pretty low. 

![Average Consistency Score By Bill Graph](https://github.com/annsudhart/annsudhart.github.io/blob/source/public/case-studies/images/consistency-score-by-bill-party.png?raw=true)