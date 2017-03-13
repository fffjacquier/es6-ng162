#Es6-ng162


## Goals

As a technical test, I propose to you to write a simple app to render a list of countries and show them on a Google Maps.

The layout of this application is expected to be divided in three parts:

* one block wrapping controls (search, sort, ...).
* one block displaying filtered countries list.
* one block wrapping the Google Maps.

As an exemple, you can organize the layout as following, but feel free to organize it differently if you prefer.

```
+------------------------------+
|   Controls: search, buttons  |
+------------------------------+
|                 |            |
|  Countries      |  Google    |
|    List         |   Maps     |
|                 |            |
+------------------------------+
```

## Data

To let you start with local data, countries data are available as a json file in the root directory of the project.  
However, the final solution should fetch these data from following API, 'https://restcountries-v1.p.mashape.com/all'.  
This endpoint requires the following HTTP header { 'X-Mashape-Key': 'l5eMXwY6d3mshmvnljsx6GVH9YWxp1IsKhsjsnSAZ5yXpYiGRl' }  

## Feature Specs

### List of countries

* As a user, I want to see a list of countries, each country should be represented as a card.
* Each country card should contain following infos: country name, capital, population, borders list.
* Each country card should have a button to quickly focus the country on the google map.

### Google Maps

* A marker should be visible for each country on the Google maps.
* When focusing on a country / marker, url must be updated.

### Controls

* As a user, I want to be able to search/filter countries.
* As a user, I want to be able to sort countries by alphabetical order or by population.
* As a user, I want to be able to compute average population of all the countries of the filtered list.
* Average population and markers displayed on the map must be updated when list of countries is updated.

## Technical constraints

* You must use git and push your commits to the dedicated bitbucket repo (please try to use atomic commits).  
* You must use AngularJS 1.6.x and Google Maps API.  
* Do not use angular's $scope.  
* Adding unit / integration tests
