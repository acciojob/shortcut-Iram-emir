function shortcut(str1, str2) {
    if (!str1 || !str2) {
        return '';
    } else {
        return str1[0] + str2[0];
    }
}

// Test cases
console.log(shortcut("Amnesty", "International"));  // Output: 'AI'
console.log(shortcut("Hello", "world"));            // Output: 'Hw'
console.log(shortcut("", "International"));         // Output: ''
console.log(shortcut("Amnesty", ""));               // Output: ''