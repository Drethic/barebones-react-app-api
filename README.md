# Backend

# Database
https://webunit4-secret-family-recipes.herokuapp.com
​
​
## Models
​
### Users
​
```
{
    email: string,     *REQUIRED*
    password: string,  *REQUIRED*
    name: string       *REQUIRED*
}
```
​
### Categories
​
```
{
    name: string,         *REQUIRED*   
    description: string   *OPTIONAL*    
}
```
​
### ingredients
​
```
{
    name: string,      *REQUIRED*  
}
```
​
### units
​
```
{    
    name: string,           *REQUIRED*   
}
```
​
### recipes
​
```
{
    user_id: int,        *REQUIRED*
    category_id: int,    *REQUIRED*
    title: string,       *REQUIRED*
    source: string,      *OPTIONAL*
    description: string  *REQUIRED*
    image_link: string,  *OPTIONAL*
    
}
```
​
### recipes_ingredients
​
```
{
    recipe_id: int,       *REQUIRED*
    ingredient_id: int,   *REQUIRED*
    unit_id: int,         *REQUIRED*
    quantity: float,      *REQUIRED*
    
}
```
### recipes_instructions
​
```
{
    recipe_id: int,        *REQUIRED*
    step_no: string,       *REQUIRED*
    instruction: string,   *REQUIRED*
  
    
}
```
 # Endpoints
 
## Users
​
| Request Type | Endpoint                       | Description             |
|:------------:|:------------------------------:|:-----------------------:|
| POST         | /api/auth/register             | Creates User            |
| POST         | /api/auth/login                | Creates JWT             |
| GET          | /api/users                     | Returns All Users       |
| GET          | /api/users/:id                 | Returns User By ID      |
| PUT          | /api/users/:id                 | Update User             |
| DELETE       | /api/users/:id                 | Remove User             |
| GET          | /api/users/:id/recipes         | Get Recipes By User ID  |

​
## Categories 
| Request Type | Endpoint                       | Description                 |
|:------------:|:------------------------------:|:---------------------------:|
| GET          | api/categories                 | Get All Categories          |
| GET          | api/categories/:id             | Get Category By ID          |
| POST         | api/categories                 | Add Category                |
| PUT          | api/categories/:id             | Update Category             |
| DELETE       | api/categories/:id             | Remove Category             |
| GET          | /api/categories/:id/recipes    | Get Recipes By Category ID  |

​
## ingredients
| Request Type | Endpoint                       | Description             |
|:------------:|:------------------------------:|:-----------------------:|
| GET          | api/ingredients                | Get All Ingredients     |
| GET          | api/ingredients/:id            | Get Ingredient By ID    |
| POST         | api/ingredients                | Add Ingredient          |
| PUT          | api/ingredients/:id            | Update Ingredient       |
| DELETE       | api/ingredients/:id            | Remove Ingredient       |
​
​
## units
| Request Type | Endpoint                       | Description             |
|:------------:|:------------------------------:|:-----------------------:|
| GET          | api/units                      | Get All Units           |
| GET          | api/units/:id                  | Get Unit By ID          |
| POST         | api/units                      | Add Unit                |
| PUT          | api/units/:id                  | Update Unit             |
| DELETE       | api/units/:id                  | Remove Unit             |

​
​
## recipes
| Request Type | Endpoint                                 | Description                  |
|:------------:|:----------------------------------------:|:----------------------------:|
| GET          | api/recipes                              | Get All Recipes              |
| GET          | api/recipes/:id                          | Get Recipe By ID             |
| POST         | api/recipes                              | Add Recipe                   |
| PUT          | api/recipes/:id                          | Update Recipe                |
| DELETE       | api/recipes/:id                          | Remove Recipe                |
| GET          | api/recipes/:id/ingredients              | Get Recipe Ingredients       |
| POST         | api/recipes/:id/ingredients              | Add Recipe Ingredient        |
| PUT          | api/recipes/:id/ingredients/:ingred_id   | Update Recipe Ingredient     |
| DELETE       | api/recipes/:id/ingredients/:ingred_id   | Remove Recipe Ingredient     |


​
## recipes_instructions
| Request Type | Endpoint                       | Description                  |
|:------------:|:------------------------------:|:----------------------------:|
| GET          | api/recipes_instructions       | Get All recipes instructions |
| GET          | api/recipes_instructions/:id   | Get recipe instruction by id |
| POST         | api/recipes_instructions       | Add recipe instruction       |
| PUT          | api/recipes_instructions/:id   | Update recipe instruction    |
| DELETE       | api/recipes_instructions/:id   | Remove recipe instruction    | 
​
<!-- 
add function "isUserRecipeIngred" for updatRecipeIngredient and deleteRecipeIngredient
add function "validateUnit", "validateCategory" for add, update, ingredient agains recipe
updateRecipeIngredient promise reture have issue  122 recipes-model.js
Naveed use action at some place but not use
Naveed not add restrict method in delete method 
Naveed chk function use two time await

# API
​
## Auth Routes:
​
### POST
`/api/auth/register`
​
- Expects Following Shape
​
```
{
    
    email: string,     *REQUIRED*
    password: string,  *REQUIRED*
    name: string,      *REQUIRED*
    
}
```
​
`/api/auth/login`
​
- Expects Following Shape
​
```
{
    email: string,   *REQUIRED*
    password: string *REQUIRED*
}
```
​
## User Routes
​
### GET
​
`api/users`
​
- Returns All Users In Database
​
`api/users/:id`
​
- Returns User That Matches ID
​
### PUT
​
`api/users/:id`
​
- Updates User Information
​
- Expects Following Shape, Only One Field Required
​
```
{
    
    email: string,     *REQUIRED*
    password: string,  *REQUIRED*
    name: string,      *REQUIRED*
    
}
```
​
### Delete
​
`api/users/:id`
​
- Removes User From Database That Matches ID
​
