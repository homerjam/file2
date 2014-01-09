// Expose the native API to javascript
forge.file2 = {

    saveURL: function(url, success, error) {
        forge.internal.call("file2.saveURL", {
                url: url
            },
            success && function(uri) {	
                success({
                    uri: uri
                });
            },
            error
        );
    }

};

// Register for our native event
forge.internal.addEventListener("file2.resume", function() {
    // alert("Welcome back!");
});
