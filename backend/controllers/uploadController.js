const getPictures = async (req, res) => {
  try {
    const pictures = await Picture.find();
    res.status(200).json(pictures);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pictures', error });
  }
};

module.exports = {
  upload,
  uploadFile,
  deleteFile,
  getPictures,
};
