const File = require("../model/fileModel");

const download = async (req, res) => {
  const file = await File.findOne({ uuid: req.params.uuid });
  const response = `${__dirname}/../${file.path}`;
  res.download(response);
};

module.exports = { download };
