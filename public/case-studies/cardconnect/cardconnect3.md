## UI Sketches

## Prototypes

![UX Flow](https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/cardconnect/images/uxflow_l.png)

### Version 1.0

![Version 1](https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/cardconnect/images/Version1.png)

Our app supports good information design by keeping networking information such as emails, phone numbers, and business card images all in one place, in order to address the user need that employees and job-seekers have to avoid losing or damaging business cards through wear and tear, when they want to retrieve the business card information for contact people in their network in the future. Our app addresses this user need by transferring the information printed on business cards in the physical world, such as emails, social networks, and phone numbers, into the digital world via digital business cards.

![Walkthrough](https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/cardconnect/images/walkthrough_v1.gif)

## Testing

![User testing the app](https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/cardconnect/images/usertest.jpg)

To provide a good user experience, we want to gauge the ease of use of the app and minimize the chance that users have slips. So, we interviewed several people mainly to obtain feedback on how the app feels to use and how we can improve the effectiveness of the UI for our intended audience. Asking people to perform several tasks a user might do when using the app, we noticed several things:

1. The information presented on the digital business card was too small to read, and users needed to squint or look closer at the screen to see the contact information. This was due to the text being the default size in CSS that we did not modify.
2. Fortunately, since we modelled our app off of existing contacts apps, users did not have trouble navigating the app because the app is similar to existing contacts apps. 
3. Users wanted more freedom in being able to choose their own business card formats and styles. This was probably a result of users seeing that the default contacts had other styles as well.

### A/B Testing
We were curious about the third observation we made during our personal interviews, so we performed A/B testing on the create page of our app. This required creating two versions of the new contact screen, which are [https://a9-cardconnect.herokuapp.com/newcontactA](https://a9-cardconnect.herokuapp.com/newcontactA) (Experiment A) and [https://a9-cardconnect.herokuapp.com/newcontactB](https://a9-cardconnect.herokuapp.com/newcontactB) (Experiment B). 


### Interpretations of results

It turned out our implementation of creating a business card via taking a photo requires extra steps. A user would need to click on the “Click to add a new picture” link and be redirected to an extra page for them to take a picture and select the picture they’d like to use. After looking at the data that we collected from Google Analytics, we understood that the options provided through Experiment A were more straightforward to use since it kept users on the same page to create a contact.

### Planned changes
From the A/B testing, it is clear we need to make changes to the way we design business card scanning, as it is clunky and takes too many steps to be of good user experience. Therefore we plan on making Experiment A the primary screen for a user to create a new digital contact for their contacts list, while incorporating the feature that Experiment B provides as a secondary, alternative option. Additionally, we plan on making the arrows that allow a user to select which business card template they would like to use more prominent, because some users indicated that they overlooked them

### Version 2.0
![Version 2](https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/cardconnect/images/Version2.png)

## Final Result
![Final app design 1](https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/cardconnect/images/uisketch1.png)

![Final app design 2](https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/cardconnect/images/uisketch2.png)

## Research sources
1. https://medium.com/@ncruzada/the-business-case-for-digital-business-cards-part-3-5441ebb96bdb
2. https://theblog.adobe.com/4-business-card-statistics-that-will-make-you-rethink-your-strategy/
3. https://www.forbes.com/sites/forbesagencycouncil/2017/11/24/is-the-business-card-dead-16-experts-share-their-thoughts/#4ab3e47d7992
