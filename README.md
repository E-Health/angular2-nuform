# Angular2-NuForm

Created using [angular2-webpack-starter](https://github.com/angularclass/angular2-webpack-starter)

* Nuform is a touch sensitive form widget that 
can be embedded in Electronic Health Records (EHR)

## How to embed 

```
<!-- In HEAD SECTION -->
  <script>
    var NUFORM = {
      'image': 'form.png',  //URL to form
      'width': 600,	// width of the canvas
      'height': 600, // height of canvas
      'nuform_in': '',  // RASTERIZED JSON Input (Load)
      'nuform_out': ''  // RASTERIZED JSON Output on Save
    }
  </script>

<!-- IN BODY SECTION -->
 	<nuform-app>
    	Loading...
  	</nuform-app>

```

## Develop
**Make sure you have Node version >= 5.0 and NPM >= 3**

```bash
# clone the repo
# --depth 1 removes all but one .git commit history
git clone https://github.com/E-Health/angular2-nuform.git

# change directory to our repo
cd angular2-nuform

# WINDOWS ONLY
# add required global libraries `typings webpack-dev-server rimraf webpack`
npm install -g typings webpack-dev-server rimraf webpack

# install the repo with npm
npm install

# WINDOWS ONLY
# install typings
npm run typings-install

# start the server
npm start  

Application will be available at http://localhost:3000/

### [Contact Me](http://nuchange.ca/contact)