module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath
      .replace("src/", "src/tests/snapshots/")
      .concat(snapshotExtension),

  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath
      .replace("src/tests/snapshots/", "src/")
      .replace(snapshotExtension, ''),

  testPathForConsistencyCheck: "src/tests/snapshots/some/example",
};
