## Final Result

![Example of Politician Twitter Consistency](https://github.com/annsudhart/annsudhart.github.io/blob/source/public/case-studies/images/consistency-example.png?raw=true)

Main takeaways:
- The data shows politicians are on average not too consistent with their votes and their tweets, and this tends to be more true for Democrats. 
- Our results should be taken with a grain of salt because of possible inaccuracies in sentiment analysis in determining a position held in a Tweet.
- Many things can be done to improve this research study, as stated below in detail.

### Ethics/Privacy
In order to web scrape Twitter for the tweet history of each congressman/woman, a Twitter Developer Account had to be requested from the company, and so we had permission to collect the Twitter data we needed to create the dataset, albeit with a restriction in the number of page requests made hourly. This restriction was circumvented with a sleep function when making the API calls. As for the GovTrack datasets, the unrestricted CSV files containing the votes on a bill from each House of Representatives are public records (since the transparency of representatives voting record is vital for maintaining a representative democracy) and no permission was needed.

Working on this type of problem involved various challenges in terms of answering our data science question without bias. To best represent the population we are studying we selected an even number of representatives from both the Democratic and Republican party; a systematic way of selecting which of the 435 politicians from the House of Representatives to use for analysis was specified (those with the most tweets and followers). 

As for selecting which of the bills voted on in the House were used for analysis: the bills that had the most divide were used i.e. there was a near even split of votes. This method of selecting bills was advantageous since it avoided biasedly selecting bills introduced to the house disproportionately by one party. 

There was a significant issue in terms of how to filter the Tweet data. The list of key words belonging to each bill were accumulated by taking key words in each of the bill statements and from analyzing the most popular results from searching each of the bills on Twitter. Whether or not Twitter has algorithm bias in their search results was out of the project’s scope of control; however, selecting the hashtags from these search results left room for human bias to unintendedly select a biased list of words and hashtags. This was a challenge to the project since the poor execution of the step would skew the data set by disproportionately containing tweets predominantly from one side of the vote. However, since this was an issue raised before curating this list of key-words, emphasis was placed on analyzing tweets from both parties.


### Conclusion
The average consistency scores for all the politicians averaged around 40%. Though we consider the margin of error provided by possible inaccuracies from Google’s sentiment analysis of the tweets, it remains that we must reject the null hypothesis. The Democratic party has demonstrated a significantly lower consistency score at approximately 30% compared to the Republicans at approximately 60%. The most transparent and consistent politician would be Tom Graves (R), the only politician who had 100% consistency. The politician who abstains the most from voting would be Kay Granger (R).

It is highly probable yet hard to calculate how drastic the effect of inaccurate sentiment analysis is on our consistency scores. An interesting finding I found in retrospect was that along party lines, the number of tweets correlates with the consistency scores by party and bill. It is possible it had a role in affecting the outcome of our hypothesis, artificially lowering the consistency of Democratic politicians in addition to the unequal balance of Democratic and Republican politician tweet counts. Looking at the example of the Violence Against Women Act and how low Democratic consistency is, a case can be argued that perhaps Google Sentiment Analysis misinterpreted impassioned language in support of VAWA as negative. So even though the literal content of the tweets would be consistent with the votes, our scoring system is limited by the sentiment analysis technology available to us.

Ultimately, our evaluations cannot purport to be the end all be all of character analysis for the included politicians. Our analysis represents whether or not the politicians were consistent between their stated views and the votes they ultimately cast. It does not pass judgement on the morality of the views and votes themselves, and does not let our individual viewpoints affect how the consistency score is calculated. The analysis we have done can only go so far, and does not make a broader moral judgement on the content of the politicians’ votes. Tom Graves may be the only one under our metric who scores 100%, but it is not an endorsement of his viewpoints. The same can be said for all the politicians in the study. Acknowledging this is especially important because of how contentious opposing political viewpoints can be. We wish to recognize that party bias is not reflected in the measurements we have created—that this study has focused on checking uniformity between a politician’s public image and their political actions.
### Possible Improvements and Reflections
Revisiting this project a year after its conclusion, there are many steps that can be taken to improve this. 
- Fine-tune the sentiment analysis by adding more relevant keywords that could better determine the sentiment of the politician on an issue. Perhaps studying selected tweets and the output given by our sentiment analysis could fix this.
- Further discuss the visualizations we made. This is actually a current work in progress as I revisit this project. We made plenty of visualizations, but I believe more could be discussed about the stories the visualizations make - the findings from the graphs we made were stated, but it would be interesting to explore the meaning behind those findings.
- Enhance the study with a statistically-oriented discussion. We discussed a null and alternative hypothesis, but after taking more statistics classes, it would be interesting to see if an actual two-proportion z-test can be performed on the mean consistency levels along party lines.

Exploring sentiment analysis and web scraping with this project as a beginner with a large group, pulling off a study like this was a challenge, but ultimately I learned a lot about the applications of this area of data science.
## References
1. [https://www.forbes.com/sites/niallmccarthy/2019/01/11/americas-most-least-trusted-professions-infographic/#195b387c7e94](https://www.forbes.com/sites/niallmccarthy/2019/01/11/americas-most-least-trusted-professions-infographic/#195b387c7e94)
2. [https://link.springer.com/chapter/10.1007/978-981-10-8013-5_7](https://link.springer.com/chapter/10.1007/978-981-10-8013-5_7)
3. [https://arxiv.org/abs/1805.08182](https://arxiv.org/abs/1805.08182)
4. [https://www.govtrack.us/congress/votes](https://www.govtrack.us/congress/votes)
5. [https://www.people-press.org/2019/04/11/public-trust-in-government-1958-2019/](https://www.people-press.org/2019/04/11/public-trust-in-government-1958-2019/)
