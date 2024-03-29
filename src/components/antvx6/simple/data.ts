export const data = [
    {
        "id": "1",
        "shape": "event",
        "width": 40,
        "height": 40,
        "position": {
            "x": 50,
            "y": 180
        }
    },
    {
        "id": "2",
        "shape": "activity",
        "width": 100,
        "height": 60,
        "position": {
            "x": 20,
            "y": 280
        },
        "label": "Оставить заявку"
    },
    {
        "id": "3",
        "shape": "bpmn-edge",
        "source": "1",
        "target": "2"
    },
    {
        "id": "4",
        "shape": "gateway",
        "width": 55,
        "height": 55,
        "position": {
            "x": 170,
            "y": 282.5
        }
    },
    {
        "id": "5",
        "shape": "bpmn-edge",
        "source": "2",
        "target": "4"
    },
    {
        "id": "6",
        "shape": "activity",
        "width": 160,
        "height": 60,
        "position": {
            "x": 300,
            "y": 240
        },
        "label": "Одобрение руководства"
    },
    {
        "id": "7",
        "shape": "activity",
        "width": 160,
        "height": 60,
        "position": {
            "x": 300,
            "y": 320
        },
        "label": "Утверждение персонала"
    },
    {
        "id": "8",
        "shape": "bpmn-edge",
        "source": "4",
        "target": "6"
    },
    {
        "id": "9",
        "shape": "bpmn-edge",
        "source": "4",
        "target": "7"
    },
    {
        "id": "10",
        "shape": "gateway",
        "width": 55,
        "height": 55,
        "position": {
            "x": 460,
            "y": 282.5
        }
    },
    {
        "id": "11",
        "shape": "bpmn-edge",
        "source": "6",
        "target": "10"
    },
    {
        "id": "12",
        "shape": "bpmn-edge",
        "source": "7",
        "target": "10"
    },
    {
        "id": "13",
        "shape": "activity",
        "width": 160,
        "height": 60,
        "position": {
            "x": 560,
            "y": 280
        },
        "label": "Утверждение персонала"
    },
    {
        "id": "14",
        "shape": "bpmn-edge",
        "source": "10",
        "target": "13"
    },
    {
        "id": "15",
        "shape": "event",
        "width": 40,
        "height": 40,
        "position": {
            "x": 750,
            "y": 290
        },
        "attrs": {
            "body": {
                "strokeWidth": 4
            }
        }
    },
    {
        "id": "16",
        "shape": "bpmn-edge",
        "source": "13",
        "target": "15"
    }
]
