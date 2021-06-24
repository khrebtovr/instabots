        $(document).ready(function() {
            $(".btn-structure").click(function() {
                $(".remove-one").toggleClass("classtrue");
                return false;
            });
        });
        $(document).ready(function() {
            $(".btn-structure").click(function() {
                $(".remove-two").toggleClass("classtrue");
                return false;
            });
        });
        $(document).ready(function() {
            $(".btn-structure").click(function() {
                $(".remove-three").toggleClass("classtrue");
                return false;
            });
        });
        $(document).ready(function() {
            $(".btn-structure").click(function() {
                $(".remove-four").toggleClass("classtrue");
                return false;
            });
        });

        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }