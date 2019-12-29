const [file, setFile] = useState();

const handleFormSubmit = e => {
    e.preventDefault(); // Stop form submit
    fileUpload(file).then(response => {
        console.log(response.data);
    });
};

const handleChange = e => {
    setFile({ file: e.target.files[0] });
};

const fileUpload = file => {
    const url = "http://example.com/file-upload";
    const formData = new FormData();
    formData.append("file", file);
    const config = {
        headers: {
            "content-type": "multipart/form-data"
        }
    };
    return axios.post(url, formData, config);
};

return (
    <form onSubmit={handleFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={handleChange} />
        <button type="submit">Upload</button>
    </form>
);
