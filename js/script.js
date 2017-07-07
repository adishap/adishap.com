(function() {
    $(".know-more-btn").on('click', function() {
        $(".intro-div").remove();
        $(".website-content").removeClass('hide');
    });

    function createSkill(svg, nodes) {
        /* Define the data for the circles */
        var elem = svg.selectAll("g myCircleText")
            .data(nodes)

        /*Create and place the "blocks" containing the circle and the text */
        var elemEnter = elem.enter()
            .append("g")
            .attr("transform", function(d) {
                return "translate(" + 80 + ",80)"
            })

        /*Create the circle for each block */
        var circle = elemEnter.append("circle")
            .attr("r", function(d) {
                return 70
            })
            .attr("stroke", "black")
            .attr("stroke-width", "10px")
            .attr("fill", "white")
            .attr("stroke-dasharray", function(d) {
                return d.arr + " 503"
            })

        /* Create the text for each block */
        elemEnter.append("text")
            .attr("dx", function(d) {
                return d.left
            })
            .text(function(d) {
                return d.label
            })
    }

    nodes = [{
        "x": 80,
        "r": 70,
        "left": -55,
        "arr": 500,
        "label": "JavaScript"
    }, {
        "x": 260,
        "r": 70,
        "left": -35,
        "arr": 400,
        "label": "jQuery"
    }, {
        "x": 440,
        "r": 70,
        "left": -25,
        "arr": 380,
        "label": "NVD3"
    }, {
        "x": 620,
        "r": 70,
        "left": -35,
        "arr": 290,
        "label": "Node.js"
    }, {
        "x": 800,
        "r": 70,
        "left": -25,
        "arr": 500,
        "label": "HTML"
    }, {
        "x": 980,
        "r": 70,
        "left": -35,
        "arr": 500,
        "label": "CSS"
    }, {
        "left": -50,
        "arr": 500,
        "label": "Bootstrap"
    }, {
        "left": -50,
        "arr": 390,
        "label": "MySQL"
    }, {
        "left": -50,
        "arr": 430,
        "label": "Linux"
    }, {
        "left": -50,
        "arr": 220,
        "label": "Golang"
    }, {
        "left": -50,
        "arr": 250,
        "label": "Python"
    }, {
        "left": -50,
        "r": 70,
        "arr": 430,
        "label": "Git"
    }];

    for (var i = nodes.length - 1; i >= 0; i--) {
        $('.skills').prepend('<div class="col-md-2"><svg class="skillsets skillset' + i + '"></svg></div>');
        var svg = d3.select('.skillset' + i);
        createSkill(svg, [nodes[i]]);
    }

})();
