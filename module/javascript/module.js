// Expose the native API to javascript
forge.file2 = {
    showAlert: function (text, success, error) {
        forge.internal.call('file2.showAlert', {text: text}, success, error);
    }
};

// Register for our native event
forge.internal.addEventListener("file2.resume", function () {
	alert("Welcome back!");
});
