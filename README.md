# TITAN Params App

The TITAN Params App is a Vue web app that reads/parses the params definitions from the TITAN model and renders them in a more human-friendly way.  It is deployed at https://pph-collective.github.io/titan-params-app/.

## Contributing

### Installing and Running

To install, clone this repo and install npm dependencies (node and npm must already be installed on your machine)

```
git clone https://github.com/marshall-lab/titan-params-app.git
cd titan-params-app
npm install
```

Before running the app, we need to fetch the data from TITAN.  This requires using the GitHub API, which needs a [token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line). Make sure the token you create for this project has repo scope. Copy the token into your .env file.  The .env file should live in the root of this repository (it's gitignored to avoid accidentally publishing secrets) and contain:

```
VUE_APP_TITAN_BRANCH=<branch you want to pull data from>
VUE_APP_GH_TOKEN=<your token>
```

In most cases, you'll likely want the `VUE_APP_TITAN_BRANCH` to be `develop`.  Without this set, the app will fetch data from the `master` branch.

Once you've set up your `.env` file you can then run `npm run fetchdata`, which fetches and parses the params data from the TITAN repo.

Now we can run the web app! Go ahead and run `npm run serve` and then navigate to http://localhost:8080

### Project Organization

#### `public`

Files in this folder get deployed with the app. If you want to change the favicon or the title that displays in the tab, make those changes here.

#### `scripts`

Contains scripts that are not used in the running of the app, but may be used to help build it.  This is where the script to fetch data lives.

#### `src`

The primary home of the web app code. `views/` correspond to the two main pages and are composed of `components/`.

If you're just looking to update the documentation, that can be found in `src/markdown/docs.md`.

### Deploying

GitHub Actions is set up to automatically deploy this web app to GitHub pages whenever there is a change to TITAN.  To create a production build locally, run `npm run build`.
