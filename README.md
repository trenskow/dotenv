@trenskow/dotenv
----

Parses `.env` and `.env.${process.env.NODE_ENV || 'development'}` down the directory tree.

# Usage

````javascript
import dotenv from '@trenskow/dotenv';

dotenv();

// `process.env` now contains found variables.
````

# License

See license in LICENSE.

