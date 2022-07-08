let option = {
    fields: [
        {
            "name": "name",
            "type": "text",
            "label": "Name"
        },
        {
            "name": "region",
            "type": "select",
            "label": "region",
            "store": "regions",
            "valueField":"code",
            "labelField":"name"
        },
        {
            "name": "country",
            "type": "select",
            "label": "Country",
            "store": "countries",
            "valueField":"code",
            "labelField":"name",
            "parentField": "region",
            "joinColumn": "region"
        }
    ]
}
