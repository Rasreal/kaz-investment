
# 📈 KazInvestment - Investment Calculator
**Check the master branch first please**

![KazInvestment](https://img.shields.io/badge/Frontend-React-blue?style=flat-square) ![License](https://img.shields.io/github/license/Rasreal/kaz-investment)  
An investment calculator web application to help users forecast their financial growth over time with various input parameters. This tool lets you easily calculate annual returns, total interest, and invested capital, with a user-friendly interface.

---

## 📂 **Project Structure**  
```
kaz-investment/
├── public/                 # Public assets
├── src/                    # Source code
│   ├── components/         # React components (Header, UserInput, Results)
│   ├── util/               # Utility functions (investment logic, formatting)
│   ├── App.js              # Main application entry point
│   ├── index.css           # Global CSS styles
│   └── index.js            # React DOM rendering logic
├── package.json            # Dependencies and project metadata
└── README.md               # Project documentation (this file)
```

---

## 🚀 **Features**  
- **Interactive User Input:** Adjust values like initial investment, annual investment, expected return, and duration.  
- **Real-Time Results:** Instant updates based on user input without page refresh.  
- **Validation Alerts:** Friendly alerts if invalid input (zero or negative values) is entered.  
- **Investment Breakdown:** Shows a yearly breakdown of investment value, annual returns, total interest, and invested capital.

---

## 🛠️ **Technologies Used**  
- **React**: Component-based frontend development.  
- **CSS**: Custom styling with responsive design.  
- **Jest** & **React Testing Library** (optional): For testing (if implemented).  

---

## 🎨 **UI Preview**  
Here are the main components and their responsibilities:  
1. **Header**: Displays the website title or logo.  
2. **UserInput**: Collects user inputs such as initial investment, annual contributions, expected return, and investment duration. Includes UI alerts for invalid inputs.  
3. **Results**: Displays a detailed table of the investment progress year by year.

---

## ⚙️ **Installation & Setup**  
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Rasreal/kaz-investment.git
   cd kaz-investment
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the App Locally**:
   ```bash
   npm start
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🧮 **Investment Calculation Logic**  
The investment projection logic resides in the `/util/investment.js` file. It calculates yearly investment value based on:  
- **Initial Investment**  
- **Annual Contributions**  
- **Expected Return Rate**  
- **Investment Duration**  

Each year's growth includes:  
- **Annual Interest Earned**  
- **Cumulative Total Interest**  
- **Total Invested Capital**

---

## ✨ **User Input Validation**  
This project ensures that user inputs are valid. If a user enters `0` or a negative value for any input field, an error message will be displayed near the input field:
```js
if (numericValue <= 0) {
  setErrors((prevErrors) => ({
    ...prevErrors,
    [inputID]: "The value cannot be zero or negative.",
  }));
  return;
}
```

Example:
![Input Validation Example](https://your-image-url-here)

---

## 📊 **Sample Results Table**  
```text
Year | Investment Value | Interest | Total Interest | Invested Capital
---------------------------------------------------------------
1    | $12,720          | $720     | $720           | $12,000
2    | $26,572          | $1,852   | $2,572         | $24,000
...
```

---

## 🧑‍💻 **Contributing**  
Contributions are welcome!  
1. Fork the repository.  
2. Create a new branch: `git checkout -b feature-name`.  
3. Make your changes and commit them: `git commit -m "Added new feature"`.  
4. Push to the branch: `git push origin feature-name`.  
5. Submit a pull request.

---

## 📄 **License**  
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🌐 **Connect with Me**  
Feel free to reach out if you have any questions or feedback!  

**GitHub**: [Rasreal](https://github.com/Rasreal)  
**Email**: ersultan.t16@gmail.com

---

## 📝 **Acknowledgments**  
Thanks to [Nazarbayev University](https://nu.edu.kz/) for inspiring this project idea.

