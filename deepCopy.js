// a = target (will be the copy of b)
// b = source (b is the original)

function deepAssign(a, b, step = 0) {
    if(step > 10) {
        return {}
    }
    for (i in b) {
        if(Array.isArray(b[i])) {
            a[i] = deepAssign([], b[i], step + 1)
        } else if(typeof b[i] === 'object') {
            a[i] = deepAssign({}, b[i], step + 1)
        } else if(typeof b[i] === 'function') {
            throw new Error('you can not clone functions')
        } else {
            a[i] = b[i]
        }
    }
    console.log("FINAL A", a)
    return a
}

// deep copy practice for project 3 - Yummev3. Need to save a of copy each recipe based on updates.
source = {
    "title": "Recipe 1",
    "extendedIngredients": {
        "ingredients": [
            {
                "name": "oats",
                "quantity": "1",
                "unit": "cup"
            },
            {
                "name": "milk",
                "quantity": "1/2",
                "unit": "cup"
            }
        ],
        "toppings": [
            {
                "name": "Maple Syrup",
                "quantity": "1",
                "unit": "tablespoon"
            },
            {
                "name": "cinnamon",
                "quantity": "1",
                "unit": "teaspoon"
            }
        ]
    }
};

deepAssign({}, source)
