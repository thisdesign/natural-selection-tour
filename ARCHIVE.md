# Archive Project Into A New Site

The idea behind the archiving is to use different instances of Prismic to control images/data, one repo with multiple branches to handle code changes, and one Netlify account to handle the hosting using different subdomains.

<br />

### Getting Started:

Get Access to the repo for Natural Selection (https://github.com/thisdesign/natural-selection-tour) and create a new branch.  I have been using the naming convention of archive-YEAR, but that may need to change if it happens more often.

You will create a new repo in prismic application/repo, name it accordingly.

Once complete, then you will need to update the endpoint in the config, with the new app you just created on Prismic..  This application is built using Slicemachine on Prismic, and you will need to be familiar with before you go any further.  https://www.slicemachine.dev/. Once familiar, find the endpoint in the settings on Prismic and update the sm.json.  You can look here for an example of the last upgrade.

<br />

### Syncing Content Model:

Once the config is updated you can run `npm slicemachine`, and open your local content modeler.  You will need to sync all of the content types from you local environment to Prismic with the ‘Sync’ button in top left corner of each model.

<br />

### Export Data:

Next to export data you will need to upgrade the original repo to medium level to export all the documents.  A new section called import/Export should now be available.  Once that is done you should be able to return it to the current level.  This will give you a zip file that you will need for the next step.

More info can be found here: https://prismic.io/docs/core-concepts/import-export

<br />

### Import Data:

Next you will need to upgrade the new Prismic app to Medium, to import.the zip you just created  This will import all documents, content, and images, with some exceptions. It should only take a couple of minutes, and will put all that data into a new release, feel free to publish it.  

Now you will have to fix a few issues:  
 - Images: Prismic will only import png/jpegs/webp.  If you used any other media types (videos/pdfs/svg) you will need to import those manually into the image library.
 - Document Links: Any where that references another document, those connections have all been broken and will need to be fixed.  This includes navigation, riders, partners, etc.

 <br />

### Setting up the server

You will need to create a web hook to notify Netlify of a build, feel free to name it what every you want.

Next go to Netlify, make sure your new branch is allowed to trigger a build in site settings. Currently it should be main, and allowed subbranches only.  You will also need to trigger a build of the new branch from your code so Netlify picks it up.

Once that is done you should be able to add your web hook, and trigger deploys from Prismic.

Assuming the builds were successful, you should be able to access the new site from the Netlify app name via branch name, for example: https://archive-2021--friendly-hodgkin-136a36.netlify.app/.

<br />

### Update DNS:

Now you need to update the dns through GoDaddy.  You should just be able to add a cname record with the branch name.

Example: archive-2021.www —> archive-2021--friendly-hodgkin-136a36.netlify.app

If you have trouble take a look here:
 - https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/

 - https://answers.netlify.com/t/support-guide-how-to-use-netlify-s-branch-deploy-feature-without-netlify-dns/128

Verify you new branch with terminal using the nslookup command.  Example: nslookup branch-name.www.example.com.  If there no errors you should be good to go.  

You will then need to request a new SSL cert for the new subdomain for Netlify support for the https version to work.

<br />

### The End

You new site should be live, but if there are issues Netlify, Prismic, and GoDaddy all have support teams that can help.