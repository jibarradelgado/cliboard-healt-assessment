const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns a determined hashed string when given a 'string' input", () => {
    const stringKey = deterministicPartitionKey("string");
    expect(stringKey).toBe("f782b910cdf388931df9f00826559deee4b9348dc447cc20b585651b1f5a02203836101a349a150642cb3f9d91ea5c40bf9ab2442caf269db552daa251107562")
  });
  it("Returns the candidate's string when given an object with partitionKey key", () => {
    const myObject = { partitionKey: 'foo'};
    const stringKey = deterministicPartitionKey(myObject);
    expect(stringKey).toBe("foo");
  });
  it("Returs a hashed string when the candidate's length is more than 256", () => {
    const string = "a".repeat(257)
    const myObject = { partitionKey: string};
    const hash = "5008048b64c14975181175f157be4a780c3d443d2177edf323d57884bc7e3979b9b53bca1325e880df3da0d97c435693441cb5527fbe950f5585678dfbb37785";
    const stringKey = deterministicPartitionKey(myObject);
    expect(stringKey).toBe(hash)
  });
  it("Returns the candidate's number converted to a string when given an object with partitionKey", () => {
    const number = 25631;
    const myObject = { partitionKey: number};
    const stringKey = deterministicPartitionKey(myObject);
    expect(stringKey).toBe("25631")
  });
});
