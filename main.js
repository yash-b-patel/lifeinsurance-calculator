function calculateAge(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function calculatePremium(age, years) {
    const basePremium = 500; // Base premium amount
    const ageFactor = age * 100; // Premium increases by rs100 per year of age
    const coverageFactor = years * 200; // Premium increases by rs200 per year of coverage
    return basePremium + ageFactor + coverageFactor;
}

function calculateCoverage() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const years = parseInt(document.getElementById('years').value);

    if (!name || !dob || isNaN(years)) {
        document.getElementById('result').innerHTML = '<p>Please fill in all fields correctly.</p>';
        return;
    }

    const age = calculateAge(dob);
    const premium = calculatePremium(age, years);

    document.getElementById('result').innerHTML = `
        <table>
            <tr>
                <th>Name</th>
                <td>${name}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>${age}</td>
            </tr>
            <tr>
                <th>Years of Coverage</th>
                <td>${years}</td>
            </tr>
            <tr>
                <th>Estimated Premium</th>
                <td>rs ${premium.toFixed(2)}</td>
            </tr>
        </table>
    `;
}