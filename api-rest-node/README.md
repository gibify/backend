Static Type Checking and Runtime Type Checking are two different ways of ensuring that the types of values in a program match the expected types.

**Static Type Checking:** This is done at compile time, before the code is run. The compiler checks that the types of values and expressions match the expected types. For example, in a statically typed language like Java or C++, if you try to assign a string to a variable that has been declared as an integer, the compiler will throw an error and the code will not compile. This helps catch type errors early in the development process.
error

```
  int number = "123"; // This will cause a compile-time error
 ```

**Runtime Type Checking:** This is done while the code is running. The types of values are checked on the fly as they are used. This is common in dynamically typed languages like Python or JavaScript, where you can assign any type of value to a variable. If you try to perform an operation that is not valid for the type of value you have, a runtime error will occur.
In general, static type checking can help catch errors early, but it requires you to declare the types of your variables upfront. Runtime type checking is more flexible, but it means that type errors might not be caught until the code is run.
```
  number = "123"
  number += 1  # This will cause a runtime error
 ```




 **Query Builder:** A query builder is a program or library that helps you construct SQL queries in a programmatic, safe, and database-agnostic way. It allows you to build queries using methods and functions, rather than writing raw SQL strings. This can help prevent SQL injection attacks and make your code easier to write and understand. However, a query builder doesn't usually provide any way to map the results of your queries onto your application's objects.
;
```
  // Example using Knex.js, a query builder for Node.js
  const users = await knex('users').where('name', 'John');
 ```

**ORM** (Object-Relational Mapping): An ORM is a tool that lets you interact with your database, like a query builder, but it also lets you work with your data as objects, hence the name. With an ORM, you can create, retrieve, update, and delete records in your database using object-oriented syntax. It maps between your objects in code and the records in your database. This can make your code more intuitive and easier to work with, but ORMs can also be more complex and have a steeper learning curve than query builders.
```
  # Example using SQLAlchemy, an ORM for Python
  john = session.query(User).filter(User.name == 'John').first()
 ```

In summary, while both query builders and ORMs help you interact with a database, ORMs provide an additional layer of abstraction by allowing you to work with your data as objects.