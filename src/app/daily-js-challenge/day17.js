const values = [0, "", false, null, undefined];

values.forEach((value) => {
    console.log(value || "Default", value ?? "Default");
});