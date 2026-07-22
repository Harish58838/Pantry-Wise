function verifyResetOTP() {
    const otpCode = document.getElementById('resetOtpInput').value;
    if (otpCode === '1234') {
        alert("OTP verified successfully! You can now set a new password.");
        navigateAuthStage(9);
    } else {
        alert("Invalid OTP! Please try again. (Hint: 1234)");
    }
}

async function saveNewPassword() {
    const newPass = document.getElementById('newPasscodeInput').value;
    if (!newPass) return alert("Please enter a new password.");
    const sb = getSupabase();
    const { error } = await sb.auth.updateUser({ password: newPass });
    if (error) alert("Error: " + error.message);
    else {
        alert("Password updated! Please log in.");
        navigateAuthStage(5);
    }
}

async function completeAppLogin() {
    const loginEmail = document.getElementById('loginEmailInput').value;
    const loginPass = document.getElementById('loginPassInput').value;

    if (!loginEmail || !loginPass) {
        alert("Please enter both email and password.");
        return;
    }

    const sb = getSupabase();
    if (!sb) {
        alert("Supabase is not connected. Please open this page using Live Server (right-click → Open with Live Server in VS Code) instead of opening the file directly.");
        return;
    }

    // Authenticate with Supabase
    const { data, error } = await sb.auth.signInWithPassword({
        email: loginEmail,
        password: loginPass,
    });

    if (error) {
        alert("Login failed: " + error.message);
        return;
    }

    let loginName = loginEmail.split('@')[0];
    // Format name nicely if possible (e.g. harish.kumar -> Harish Kumar)
    loginName = loginName.split('.').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    if (!loginName) loginName = "User";

    const userId = data.user.id;
    loadUserData(userId, loginName);
    completeAppLoginFlow();
}

function completeAppLoginFlow() {
    document.getElementById('appAuthView').style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrollbars when entering dashboard
    window.scrollTo({ top: 0, behavior: 'instant' }); // Ensure dashboard starts exactly at the top
    fireCelebrationConfettiLoop();
    initializeChartVisualizations();
    reloadAppUIRenderers();
}

async function completeAppSignup() {
    const signupName = document.getElementById('signupName').value || 'New User';
    const signupEmail = document.getElementById('signupEmail').value;
    const signupPass = document.getElementById('signupPass').value;

    if (!signupEmail || !signupPass) {
        alert("Please enter both email and password.");
        return;
    }

    const sb = getSupabase();
    if (!sb) {
        alert("Supabase is not connected. Please open this page using Live Server (right-click → Open with Live Server in VS Code) instead of opening the file directly.");
        return;
    }

    // Create user in Supabase
    const { data, error } = await sb.auth.signUp({
        email: signupEmail,
        password: signupPass,
        options: {
            data: {
                full_name: signupName
            }
        }
    });

    if (error) {