const registerUser = async (req, res) => {
    try {
        res.status(200).json({
            message: "Hello Mamoon"
        });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

export default registerUser;