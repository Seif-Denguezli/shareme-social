export default {
  name: "comment", //name of the schema
  title: "Comment", //Title of the schema
  type: "document", //type of the schema defined to document
  fields: [
    //We will define objects which will represent the attributes
    //First attribute is the postedBy : Who posted the comment
    {
      name: "postedBy",
      title: "Pasted By",
      type: "postedBy",
    },
    //Second attribute is for the comment
    {
      name: "comment", //Attribute name
      title: "Comment", //Attribute title
      type: "string", // attribute type
    },
  ],
};
