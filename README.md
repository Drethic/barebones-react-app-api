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
​
## Categories 
| Request Type | Endpoint                       | Description             |
|:------------:|:------------------------------:|:-----------------------:|
| GET          | api/categories                 | Get All categories      |
| GET          | api/categories/:id             | Get category by id      |
| POST         | api/categories                 | Add category            |
| PUT          | api/categories/:id             | Update category         |
| DELETE       | api/categories/:id             | Remove category         |
​
## ingredients
| Request Type | Endpoint                       | Description             |
|:------------:|:------------------------------:|:-----------------------:|
| GET          | api/ingredients                | Get All ingredients     |
| GET          | api/ingredients/:id            | Get ingredient by id    |
| POST         | api/ingredients                | Add ingredient          |
| PUT          | api/ingredients/:id            | Update ingredient       |
| DELETE       | api/ingredients/:id            | Remove ingredient       |
​
​
## units
| Request Type | Endpoint                       | Description             |
|:------------:|:------------------------------:|:-----------------------:|
| GET          | api/units                      | Get All units           |
| GET          | api/units/:id                  | Get unit by id          |
| POST         | api/units                      | Add unit                |
| PUT          | api/units/:id                  | Update unit             |
| DELETE       | api/units/:id                  | Remove unit             |
​
​
## recipes
| Request Type | Endpoint                       | Description             |
|:------------:|:------------------------------:|:-----------------------:|
| GET          | api/recipes                    | Get All recipes         |
| GET          | api/recipes/:filter            | Get recipes by filter   |
| GET          | api/recipes/:id                | Get recipe by id        |
| POST         | api/recipes                    | Add recipe              |
| PUT          | api/recipes/:id                | Update recipe           |
| DELETE       | api/recipes/:id                | Remove recipe           |
​
## recipes_ingredients
| Request Type | Endpoint                       | Description                  |
|:------------:|:------------------------------:|:----------------------------:|
| GET          | api/recipes_ingredients        | Get All recipes ingredients  |
| GET          | api/recipes_ingredients/:id    | Get recipe ingredient by id  |
| POST         | api/recipes_ingredients        | Add recipe ingredients       |
| PUT          | api/recipes_ingredients/:id    | Update recipe ingredients    |
| DELETE       | api/recipes_ingredients/:id    | Remove recipes ingredients   |
​
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
