# Welcome to A Quickstart Guide to React in the CMS

This is a free, standalone lesson from HubSpot Academy that goes over how to create a CMS React project to start using React in your HubSpot CMS. 

Please take the lesson here: http://academy.hubspot.com/lessons/quickstart-guide-to-react-in-cms.    

## Environment Setup

To setup your development environment to work with JS rendering, you’ll first need a few things:

- A HubSpot account with CMS Free, Starter, Pro, or Enterprise access
- [Node.js](https://nodejs.org/en/) - v16.0 or higher and associated version of NPM

## Creating and Deploying a JS Rendered Project

This section will take you through the process of deploying your first JS rendering project on HubSpot.

### 1. Clone the Repo

First, clone this repository:

```
git clone https://github.com/HubSpot-Academy/a-quickstart-guide-to-react-in-the-cms.git
```

This repo has a few significant directories:

- `cms-world-theme/`: Some example HubL templates that refer to JS components elsewhere
- `cms-react-project/`: The HubSpot project folder
- `cms-react-project/cms-react-app`: A package inside of the project that can contain React components (a project can contain many different package types, like [CRM apps](https://developers.hubspot.com/docs/platform/create-custom-cards-with-projects), etc)

### 2. Install dependencies

Open your terminal and change into the repo root folder (`a-quickstart-guide-to-react-in-the-cms`) if you are not already there.

Then run `npm install`. This will install all the local development tools you need—like `@hubspot/cli` and `@hubspot/cms-dev-server`—and the dependencies used inside cms-react-app/ JS component code.

### 3. Uploading and Deploying on HubSpot

Run `hs init` from the root of the repository to configure it to upload to your HubSpot account using your personal access key. When setting up JavaScript assets for the first time, you will need to deactivate and regenerate your personal access key making sure it includes `CMS Pages`, `Design Manager`, `Developer Projects`, and `GraphQL Data Fetching` permissions. This will create a `hubspot.config.yaml` file that is required for both uploading changes and local development. See the [HubSpot CLI documentation](https://developers.hubspot.com/docs/cms/guides/getting-started-with-local-development?__hstc=75491725.e2098b212e147a7b9be6fd756c0c6815.1649440584659.1667397195793.1667489478959.105&__hssc=75491725.4.1667489478959&__hsfp=1149209764#configure-the-local-development-tools) for more information.

> **Warning**
> If you are using an existing access key from a previous call to `hs init` or `hs auth`, you will need to deactivate and regenerate the access key to include new scopes necessary for local CMS React development.

Next double-check you are still in `a-quickstart-guide-to-react-in-the-cms/` and run `npm run deploy` to upload the CMS React project to your HubSpot account. Once the project is uploaded, built, and deployed, you will be able to add the modules and partials to your HubSpot templates.

From the repository root, run `npm run upload:hubl` to upload the corresponding example HubL files to your account.

At this point, you should be able to create a page from one of the `cms-react-theme` templates and see the output of the React components included in them in the page preview.

### 4. Developing Locally

Now that you have your first deployment under your belt, let’s try developing locally.

To do this, simply run the dev server with `npm run start` and navigate to a development URL such as http://hslocal.net:3000/partial/Cars. Now when you make edits to the any partial, your browser will automatically reload to display your changes.

Also for easier access, you can visit http://hslocal.net:3000 to see an index page that links to the `/partial/<partial filename>` or `/module/<module name>` endpoint for every JS partial and module inside your project.

### 5. Previewing local changes on proxied pages

In addition to direct local previews of JS partials and modules, you can preview your local JS component inside of live HubL-rendered pages. To do that you first need to create a page:

- Go to Control Center
- Click “Create”, ”Create Landing page”, write a page name, and click “Create page”..
- Switch your active theme to “CMS React Theme - HubSpot Academy Quickstart Lesson”, and select one of the CMS React theme templates
- Give that page a name in the settings tab, then publish that page and preview it.

After that, you can proxy that page locally by:

- Running the local dev server as described above
- Visit the newly created page in your browser
- Open the sprocket menu and select Open Local Dev Server:
- Your local JavaScript source changes will appear immediately in the context of the HubL page

## Known Issues

### “Modern” Yarn support:

The “Hello World” sample code repository has been tested with and supports the NPM and [“Classic” Yarn](https://classic.yarnpkg.com/lang/en/) package managers. There have been reported issues with [“Modern” Yarn](https://yarnpkg.com/) and “Hello World”. We recommend while working with this sample code that you do not use [“Modern” Yarn](https://yarnpkg.com/).
