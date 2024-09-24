  const makeChange = (c) => {
            // Convert input to integer
            c = parseInt(c);

            // Initialize the result object
            let change = { q: 0, d: 0, n: 0, p: 0 };

            // Calculate quarters
            change.q = Math.floor(c / 25);
            c = c % 25;

            // Calculate dimes
            change.d = Math.floor(c / 10);
            c = c % 10;

            // Calculate nickels
            change.n = Math.floor(c / 5);
            c = c % 5;

            // Remaining amount is pennies
            change.p = c;

            return change;
        };

        // Prompt user to input a value
        const c = prompt("Enter an amount in cents (e.g., 47): ");
        alert(JSON.stringify(makeChange(c)));