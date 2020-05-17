
# Case Study Name here

`<img src="/media/truther-tweet.png"/>`

## Overview/TLDR

Politicians often get a reputation for being corrupt and shady liars. But how much is that true, and how much of it is related to political party lines? With a group of nine other students, I set out to test American Congressmembers' trustworthiness by comparing whether the opinions and words politicians speak match their voting record. To do this, we gathered voting data on several Congressmen and Congresswomen to understand voting patterns and honesty in politicians. Then, we scanned the Twitter accounts of Congress members, taking key words and hashtags for hot topics, and compared their words against their voting patterns using sentiment analysis. Scores are then assigned to these politicians based on their “trustworthiness” - a representation of their viewpoint consistency, and we aggregated these scores in various ways to describe the two parties’ relationship with honesty.

My role in this project was compiling the Twitter URLs to scrape from and to combine the data and research from all of my partners into one document. I also helped to improve and create some of the data visualizations to make them easier to read and gain insights from.
## Background
`<img src={placeholderurl}/>`
The US government relies on its Congress to not only check the powers of the president and other branches of government but also to draft legislation that has an impact on our lives. With such important duties, it is disappointing to see that politicians are known to be one of the least trusted professions out there.

Fortunately, we have a way to directly engage with these politicians and evaluate for ourselves if these Congress members are performing a satisfactory job or not. With our primary sources of information transitioning from the newspaper, to the television, to now social media, politicians have increased their presence on Twitter to speak to their constituents and gain their support. So it follows that by using Twitter, we can see how they vote and what they believe in, and compare those with what we believe is right. This fact gives us a valuable source of data for our research.
## Previous Research

There has been other research that sought to explore this topic. One study gave us the groundwork for studying political leanings based on language. In this study, data science and neural networking were leveraged to predict how Republicans or Democrats would vote on each bill. It looked at the language used by bills and party ideology, then categorized a bill using a sentiment analysis on keyword vectors against a partisan sponsor vector. The study’s model was able to predict 86% of votes correctly in the 2005–2012 test set--a level of accuracy several percentage points better than previous state-of-the-art machine learning approaches.

Also, the study’s data model yields interesting insights regarding the relative ideological positions of prominent legislators. The legislator vectors from their model, for example, can be used as a proxy for legislator ideology. By looking at yes-and-no voting they found that most Democrats will most likely support the bill sponsored by their own party and have negative opinions on a Republican version. The opposite is true for the Republicans.

In other projects, researchers mainly researched Trump’s impact on politics. Since Trump’s introduction into politics, political analysts have seen a rise in highly contested claims accompanied by a defense of ‘fake news’ and ‘alternative facts’ against the president’s words. Other politicians have taken to such practices to spread their views and propaganda, and now we increasingly have to verify the information we obtain ourselves against the people we are supposed to trust.

## Problem Statement/Research Question
How consistent are Congressmen/Congresswomen with the beliefs they state on Twitter and how they vote on various issues in Congress? Are both parties equally consistent in their views?
## Hypothesis
Say that a consistency score is how consistent a politician is with what they tweet and how they vote.

H0: Both parties are equally consistent in their tweets and their voting pattern (they have the same consistency scores under 90% significant level). To clarify, the null hypothesis predicts that average consistency scores of Democratic and Republican members of Congress between tweets and voting behavior will be equal to a significance level of 90%. We predict that members of Congress will be mostly consistent between their tweets and their voting behavior, because of the easily accessible information that is available to the public (such as their voting ballots on [GovTrack.us](https://GovTrack.us).

HA (Alternative hypothesis): The parties are not equally consistent in their tweets and their voting pattern (The parties do not have the same consistency scores under 90% significant level). In other words, the alternative hypothesis suggests that average consistency scores of Democratic and Republican members of Congress between tweets and voting behavior will not be equal to a significance level of 90%. This is also likely due to possible lack of accountability for transparency.

## Data Analysis and Gathering

### Data Cleaning
The first part of our data collection and cleaning was to get information on Congress members’ voting activity.

There is a website called GovTrack that records the votes made by Congress for different pieces of legislation. The ones we take into consideration are:
-  [H.R. 16644: Save the Internet Act of 2019](https://www.govtrack.us/congress/votes/116-2019/h167). This bill deals with Net Neutrality and restoring the open internet order of the Federal Communications Commision. Relevant hashtags: #SaveTheInternet and #NetNeutrality.
-  [H.Res 271: Condemning the Trump Administration’s Legal Campaign to Take Away Americans’ Health Care](https://www.govtrack.us/congress/votes/116-2019/h146) , which focuses on President Trump and the Affordable Care Act.
-  [H.R. 7: Paycheck Fairness Act](https://www.govtrack.us/congress/votes/116-2019/h134), which amends the Fair Labor Standards Act of 1938 to remedy the discrimination, in terms of wages, on the basis of sex. Relevant hashtags: #EqualPay, #EqualRightsAmmendment, #ERA, #women, #EqualRights, #GenderInequality.
-  [H.R. 1: For the People Act of 2019](https://www.govtrack.us/congress/votes/116-2019/h118), which was a vote to “expand Americans’ access to the ballot box, reduce the influence of big money in politics, and strengthen ethics rules for public servants, and for other purposes”. Relevant hashtags: #VotingRights, #ElectionIntegrity,#RiggedElections, #ForThePeople.
-  [H.Res. 145: Requiring a background check for every firearm sale](https://www.govtrack.us/congress/votes/116-2019/h91). This bill refers to the gun violence that has become quite ubiquitous in the country. This is a polarizing issue, where Congress members have been quite vocal in their opinions. Relevant hashtags: #GunControl, #2ndAmmendment, #NoGunControl, and #GunViolence.
-  [S.J.Res. 7: A joint resolution to direct the removal of United States Armed Forces from hostilities in the Republic of Yemen that have not been authorized by Congress.](https://www.govtrack.us/congress/votes/116-2019/h153). This bill was a vote on whether or not to withdraw troops from the proxy war in Yemen. Tweets containing the references to Yemen will be extracted and used for analysis.
-  [H.R. 1585: Violence Against Women Reauthorization Act of 2019](https://www.govtrack.us/congress/votes/116-2019/h156). Tweets in regards to this topic will be found with the key words of this bill.
-  [H.J.Res. 46: Relating to a national emergency declared by the President on February 15, 2019.]('https://www.govtrack.us/congress/votes/116-2019/h127') This bill condemns the national emergency Trump declared in January of 2019. Tweets mentioning Trump and the national security will be mined from Twitter.

Each of these links go to a webpage with information on the votes and contains a link to a CSV with data on what each Congress member’s vote on the bill was and the Congress member’s state, district, name, and party. Based on this data, we simplify the data by creating a CSV in which each entry contains the information of a Congress member and their vote on a specific bill. In this step, concern was raised on whether these cleaning steps were properly done since many representatives did not vote on any of the bills. After careful inspection, it was deducted that many representatives were not voting on any of these bills, which is particularly interesting since the congress people were selected by how active and popular they are on Twitter.

The second part of our data collection was to scrape data off of Twitter. Since we chose to answer our data science question by selecting eight bills that were voted on in the 116th Congress, we filtered each representative’s Twitter history by only selecting Tweets that discerned one of the eight bills. This was executed by checking whether or not the Tweet contained key words from the bill or a particular hashtag, demonstrating support for or against the bill. The last step taken in cleaning this data was the removal of any non-English words in the Tweet, which was due to the Tweepy library failing to remove all HTML code in the text part of the tweet. Python’s string function: `isalpha()`was used to remove these invalid parts of the Tweet text.
