function validateForm() {
            let email = document.getElementById("emailip").value.trim();
            let password = document.getElementById("passip").value.trim();

            // Email validation
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address");
                return false;
            }

            // Password validation
            if (password.length < 6) {
                alert("Password must be at least 6 characters long");
                return false;
            }

            alert("Login Successful!");
            return true;
        }