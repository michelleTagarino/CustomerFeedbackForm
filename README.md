## Checkout.com Challenge - Customer Feedback Form

A small application made with the React-based Next.js framework.
- A user is presented with a customer feedback form on the landing page.
- All fields are required.
- The user is redirected to the Feedback page on successful form submission.
- On the Feedback page, the user can see a distribution of all submitted ratings in the chart.
- The user can also see a list of comments that were recently submitted.

## Get Started

First, run the development server:

```bash
npm run dev
```

Then run the mock server:

```bash
npm run server
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tools Used

### Next.js
React-based framework that offers server-side rendering (as opposed to just client-side rendering). I chose this framework because it's familiar to me, yet offers a modern twist on React development. I love React by itself, but every now and then I like to try something new.

### Tailwind CSS
For mobile repsonsiveness, easy usability, and options for accessibility for the end user.

### TypeScript
For type safety and fewer bugs. I wouldn't use just JavaScript if I was developing a complex app for a large scale business.

### JSON Server
I used this to simulate a server. With the time I had, I had to take away the time it would take me to set up a real server, and this option was a nice substitute. I often did this at my previous jobs when I was working on a front end task and the backend wasn't developed yet.

### Chart.js
There are a lot of chart libraries out there, but this one had the most support, easy setup, and a lot of room for customisation.

## Improvements I wish I had time for

### Tests
- I thought it would be fun to play around with Cypress as I have never worked with it before, but this ended up being my downfall. I didn't have enough time to create as many tests as I wanted to (especially the form!!!), because I was unfamiliar with its syntax.
- I originally created a test suite for the FeedbackForm component, but I spent about half an hour trying to debug an error that I couldn't quite crack in time. I moved on in favour of finishing the project.
- Overall, I had a really good first impression on Cypress. It's well documented and has a large community behind it for tips and learning :)

### Themes
- I was really excited to get to work with Tailwind CSS. It's simple and easy to use without much need for configuration.
- I think the option to choose between different themes not only gives users a sense of individuality when viewing apps, but they also provide better alternatives for those who are vision impaired. I intended to include this when I was planning, but I ran out of time.

### Folder structure
- I tried to organise the project in such a way that I think would have scaled best. Next.js sort of limits you to the way you structure your app depending on which router you use (App or Pages). I chose the App router and I think this structure works the best for an application this size. But at the end of the day, I still think this could use a few more tweaks if I had the time. For instance, I would have moved some component styles out of the global file and into their respective folders.
