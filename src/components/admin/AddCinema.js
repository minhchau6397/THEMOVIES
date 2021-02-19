import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addCinema, addLocation } from '../../redux/actions/cinema_action';
import { addSchedule } from '../../redux/actions/schedules_action'
import { addNews } from '../../redux/actions/news_action'


export const AddCinema = (props) => {
    const [cinema, setCinema] = useState({
        cinema: "",
        className: "",
        image: ""
    });


    const handleInputChange = (e) => {
        setCinema({
            ...cinema,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createCinema(cinema)
        setCinema({
            cinema: "",
            className: "",
            image: ""
        })
    }
    const handleSubmitNews = () => {
        props.createNews({
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            subContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur itaque recusandae reprehenderit numquam deleniti asperiores quisquam provident modi vel, iste, nisi eius iure laborum voluptatem accusantium pariatur consequatur nihil. Delectus.",
            content: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptatem laudantium exercitationem quod quam quidem obcaecati beatae. Soluta quis distinctio culpa, quo, iusto, aliquam veniam deleniti quam maiores quae officiis?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ducimus delectus molestiae quibusdam at, quasi, voluptatum magni tempore nam excepturi, vero aspernatur asperiores consectetur voluptate. Ad accusantium cupiditate dicta quisquam.</p><img src=\"/images/banner_hardkill_bg.jpg\" alt=\"Lorem ipsum dolor, sit amet consectetur adipisicing elit.\"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus commodi quaerat maxime alias, quibusdam doloribus esse repellendus autem illum voluptas reprehenderit atque voluptate officiis quo saepe. Officia itaque atque laboriosam!</p>",
            thumbnail: "https://via.placeholder.com/150.png",
            image: "/images/banner_hardkill_bg.jpg",
            release: "2021-01-14",
            type: ["all", "sale"]
        })
        props.createNews({
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            subContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur itaque recusandae reprehenderit numquam deleniti asperiores quisquam provident modi vel, iste, nisi eius iure laborum voluptatem accusantium pariatur consequatur nihil. Delectus.",
            content: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptatem laudantium exercitationem quod quam quidem obcaecati beatae. Soluta quis distinctio culpa, quo, iusto, aliquam veniam deleniti quam maiores quae officiis?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ducimus delectus molestiae quibusdam at, quasi, voluptatum magni tempore nam excepturi, vero aspernatur asperiores consectetur voluptate. Ad accusantium cupiditate dicta quisquam.</p><img src=\"/images/banner_hardkill_bg.jpg\" alt=\"Lorem ipsum dolor, sit amet consectetur adipisicing elit.\"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus commodi quaerat maxime alias, quibusdam doloribus esse repellendus autem illum voluptas reprehenderit atque voluptate officiis quo saepe. Officia itaque atque laboriosam!</p>",
            thumbnail: "https://via.placeholder.com/150.png",
            image: "/images/banner_hardkill_bg.jpg",
            release: "2021-01-05",
            type: ["all", "sale"]
        })
        props.createNews({
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            subContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur itaque recusandae reprehenderit numquam deleniti asperiores quisquam provident modi vel, iste, nisi eius iure laborum voluptatem accusantium pariatur consequatur nihil. Delectus.",
            content: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptatem laudantium exercitationem quod quam quidem obcaecati beatae. Soluta quis distinctio culpa, quo, iusto, aliquam veniam deleniti quam maiores quae officiis?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ducimus delectus molestiae quibusdam at, quasi, voluptatum magni tempore nam excepturi, vero aspernatur asperiores consectetur voluptate. Ad accusantium cupiditate dicta quisquam.</p><img src=\"/images/banner_hardkill_bg.jpg\" alt=\"Lorem ipsum dolor, sit amet consectetur adipisicing elit.\"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus commodi quaerat maxime alias, quibusdam doloribus esse repellendus autem illum voluptas reprehenderit atque voluptate officiis quo saepe. Officia itaque atque laboriosam!</p>",
            thumbnail: "https://via.placeholder.com/150.png",
            image: "/images/banner_hardkill_bg.jpg",
            release: "2021-01-22",
            type: ["all", "sale"]
        })
        props.createNews({
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            subContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur itaque recusandae reprehenderit numquam deleniti asperiores quisquam provident modi vel, iste, nisi eius iure laborum voluptatem accusantium pariatur consequatur nihil. Delectus.",
            content: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptatem laudantium exercitationem quod quam quidem obcaecati beatae. Soluta quis distinctio culpa, quo, iusto, aliquam veniam deleniti quam maiores quae officiis?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ducimus delectus molestiae quibusdam at, quasi, voluptatum magni tempore nam excepturi, vero aspernatur asperiores consectetur voluptate. Ad accusantium cupiditate dicta quisquam.</p><img src=\"/images/banner_hardkill_bg.jpg\" alt=\"Lorem ipsum dolor, sit amet consectetur adipisicing elit.\"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus commodi quaerat maxime alias, quibusdam doloribus esse repellendus autem illum voluptas reprehenderit atque voluptate officiis quo saepe. Officia itaque atque laboriosam!</p>",
            thumbnail: "https://via.placeholder.com/150.png",
            image: "/images/banner_hardkill_bg.jpg",
            release: "2021-01-14",
            type: ["all", "sale"]
        })
        props.createNews({
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            subContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur itaque recusandae reprehenderit numquam deleniti asperiores quisquam provident modi vel, iste, nisi eius iure laborum voluptatem accusantium pariatur consequatur nihil. Delectus.",
            content: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptatem laudantium exercitationem quod quam quidem obcaecati beatae. Soluta quis distinctio culpa, quo, iusto, aliquam veniam deleniti quam maiores quae officiis?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ducimus delectus molestiae quibusdam at, quasi, voluptatum magni tempore nam excepturi, vero aspernatur asperiores consectetur voluptate. Ad accusantium cupiditate dicta quisquam.</p><img src=\"/images/banner_hardkill_bg.jpg\" alt=\"Lorem ipsum dolor, sit amet consectetur adipisicing elit.\"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus commodi quaerat maxime alias, quibusdam doloribus esse repellendus autem illum voluptas reprehenderit atque voluptate officiis quo saepe. Officia itaque atque laboriosam!</p>",
            thumbnail: "https://via.placeholder.com/150.png",
            image: "/images/banner_hardkill_bg.jpg",
            release: "2021-01-05",
            type: ["all", "sale"]
        })
        props.createNews({
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            subContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur itaque recusandae reprehenderit numquam deleniti asperiores quisquam provident modi vel, iste, nisi eius iure laborum voluptatem accusantium pariatur consequatur nihil. Delectus.",
            content: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptatem laudantium exercitationem quod quam quidem obcaecati beatae. Soluta quis distinctio culpa, quo, iusto, aliquam veniam deleniti quam maiores quae officiis?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ducimus delectus molestiae quibusdam at, quasi, voluptatum magni tempore nam excepturi, vero aspernatur asperiores consectetur voluptate. Ad accusantium cupiditate dicta quisquam.</p><img src=\"/images/banner_hardkill_bg.jpg\" alt=\"Lorem ipsum dolor, sit amet consectetur adipisicing elit.\"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus commodi quaerat maxime alias, quibusdam doloribus esse repellendus autem illum voluptas reprehenderit atque voluptate officiis quo saepe. Officia itaque atque laboriosam!</p>",
            thumbnail: "https://via.placeholder.com/150.png",
            image: "/images/banner_hardkill_bg.jpg",
            release: "2021-01-22",
            type: ["all", "sale"]
        })
        props.createNews({
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            subContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur itaque recusandae reprehenderit numquam deleniti asperiores quisquam provident modi vel, iste, nisi eius iure laborum voluptatem accusantium pariatur consequatur nihil. Delectus.",
            content: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptatem laudantium exercitationem quod quam quidem obcaecati beatae. Soluta quis distinctio culpa, quo, iusto, aliquam veniam deleniti quam maiores quae officiis?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ducimus delectus molestiae quibusdam at, quasi, voluptatum magni tempore nam excepturi, vero aspernatur asperiores consectetur voluptate. Ad accusantium cupiditate dicta quisquam.</p><img src=\"/images/banner_hardkill_bg.jpg\" alt=\"Lorem ipsum dolor, sit amet consectetur adipisicing elit.\"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus commodi quaerat maxime alias, quibusdam doloribus esse repellendus autem illum voluptas reprehenderit atque voluptate officiis quo saepe. Officia itaque atque laboriosam!</p>",
            thumbnail: "https://via.placeholder.com/150.png",
            image: "/images/banner_hardkill_bg.jpg",
            release: "2021-01-05",
            type: ["all", "sale"]
        })
        props.createNews({
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            subContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur itaque recusandae reprehenderit numquam deleniti asperiores quisquam provident modi vel, iste, nisi eius iure laborum voluptatem accusantium pariatur consequatur nihil. Delectus.",
            content: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis error, nobis delectus facere esse reprehenderit repudiandae possimus similique voluptates quod, alias illum. Dignissimos vitae nostrum laboriosam non ab praesentium.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptatem laudantium exercitationem quod quam quidem obcaecati beatae. Soluta quis distinctio culpa, quo, iusto, aliquam veniam deleniti quam maiores quae officiis?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ducimus delectus molestiae quibusdam at, quasi, voluptatum magni tempore nam excepturi, vero aspernatur asperiores consectetur voluptate. Ad accusantium cupiditate dicta quisquam.</p><img src=\"/images/banner_hardkill_bg.jpg\" alt=\"Lorem ipsum dolor, sit amet consectetur adipisicing elit.\"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus commodi quaerat maxime alias, quibusdam doloribus esse repellendus autem illum voluptas reprehenderit atque voluptate officiis quo saepe. Officia itaque atque laboriosam!</p>",
            thumbnail: "https://via.placeholder.com/150.png",
            image: "/images/banner_hardkill_bg.jpg",
            release: "2021-01-22",
            type: ["all", "sale"]
        })
    }

    const handleSubmitLocation = () => {
        props.createLocation("1mgNNyZeOXOjB3TsJukB", {
            name: "Cộng hòa",
            address: "cộng hòa, quận bình tân",
            thumbnail: "https://via.placeholder.com/150.png"
        });
        props.createLocation("1mgNNyZeOXOjB3TsJukB", {
            name: "Vincom CMT8",
            address: "cộng hòa, quận bình tân",
            thumbnail: "https://via.placeholder.com/150.png"
        });

        props.createLocation("SrWOLSJTTzYR1xUusVrD", {
            name: "ABC",
            address: "cộng hòa, quận bình tân",
            thumbnail: "https://via.placeholder.com/150.png"
        });
        props.createLocation("TauFveR6IQUVdBgrZq5I", {
            name: "Vincom 3/2",
            address: "cộng hòa, quận bình tân",
            thumbnail: "https://via.placeholder.com/150.png"
        });
        props.createLocation("yxs9mX5s7uCDlZUGj8Fp", {
            name: "Quang Trung",
            address: "cộng hòa, quận bình tân",
            thumbnail: "https://via.placeholder.com/150.png"
        });
    }

    const handleSubmitSchedule = () => {
        // props.createSchedule("NC1TPbD4x1NXQ5rATYaN/locations/UuhE3MKABqIXP83g7kej/broadcast", {
        //     type: {
        //         "2D Digital": ["9:00", "15:00", "21:00", "23:00"],
        //         "3D Digital": ["9:00", "15:00", "21:00", "23:00"]
        //     }
        // }, 'NC1TPbD4x1NXQ5rATYaN', 'UuhE3MKABqIXP83g7kej');
        // props.createSchedule("NC1TPbD4x1NXQ5rATYaN/locations/UuhE3MKABqIXP83g7kej/broadcast", {
        //     type: {
        //         "2D Digital": ["9:00", "15:00", "21:00", "23:00"],
        //         "3D Digital": ["9:00", "15:00", "21:00", "23:00"]
        //     }
        // }, 'NC1TPbD4x1NXQ5rATYaN', 'UuhE3MKABqIXP83g7kej');
        // props.createSchedule("NC1TPbD4x1NXQ5rATYaN/locations/tnCkfdqeOMnS4RTi9d0q/broadcast", {
        //     type: {
        //         "2D Digital": ["9:00", "13:35", "15:15", "21:00", "23:00"]
        //     }
        // }, 'NC1TPbD4x1NXQ5rATYaN', 'tnCkfdqeOMnS4RTi9d0q');
        // props.createSchedule("NC1TPbD4x1NXQ5rATYaN/locations/tnCkfdqeOMnS4RTi9d0q/broadcast", {
        //     type: {
        //         "2D Digital": ["9:00", "13:35", "15:15", "21:00", "23:00"]
        //     }
        // }, 'NC1TPbD4x1NXQ5rATYaN', 'tnCkfdqeOMnS4RTi9d0q');


        // props.createSchedule("1mgNNyZeOXOjB3TsJukB/locations/Rsihq3uwMeEz5BuejifK/broadcast", {
        //     type: {
        //         "2D Digital": ["9:00", "15:00", "21:00", "23:00"]
        //     }
        // }, '1mgNNyZeOXOjB3TsJukB', 'Rsihq3uwMeEz5BuejifK');
        // props.createSchedule("1mgNNyZeOXOjB3TsJukB/locations/Rsihq3uwMeEz5BuejifK/broadcast", {
        //     type: {
        //         "2D Digital": ["9:00", "15:00", "21:00", "23:00"]
        //     }
        // }, '1mgNNyZeOXOjB3TsJukB', 'Rsihq3uwMeEz5BuejifK');
        // props.createSchedule("1mgNNyZeOXOjB3TsJukB/locations/YkFaQY6h5YTB9OigbtQ6/broadcast", {
        //     type: {
        //         "2D Digital": ["9:00", "13:35", "15:15", "21:00", "23:00"]
        //     }
        // }, '1mgNNyZeOXOjB3TsJukB', 'YkFaQY6h5YTB9OigbtQ6');
        // props.createSchedule("1mgNNyZeOXOjB3TsJukB/locations/YkFaQY6h5YTB9OigbtQ6/broadcast", {
        //     type: {
        //         "2D Digital": ["9:00", "13:35", "15:15", "21:00", "23:00"]
        //     }
        // }, '1mgNNyZeOXOjB3TsJukB', 'YkFaQY6h5YTB9OigbtQ6');


        // props.createSchedule("SrWOLSJTTzYR1xUusVrD/locations/3DLizixvgNijK559lTWc/broadcast", {
        //     type: {
        //         "2D Digital": ["9:00", "10:35", "11:55", "13:35", "15:15", "21:00", "23:00"]
        //     }
        // }, 'SrWOLSJTTzYR1xUusVrD', '3DLizixvgNijK559lTWc');
        // props.createSchedule("SrWOLSJTTzYR1xUusVrD/locations/3DLizixvgNijK559lTWc/broadcast", {
        //     type: {
        //         "2D Digital": ["9:00", "10:35", "11:55", "13:35", "15:15", "21:00", "23:00"]
        //     }
        // }, 'SrWOLSJTTzYR1xUusVrD', '3DLizixvgNijK559lTWc');


        // props.createSchedule("TauFveR6IQUVdBgrZq5I/locations/9urK4p9dtwT00CnReWa0/broadcast", {
        //     type: {
        //         "2D Digital": ["9:00", "10:35", "11:55", "13:35", "15:15", "21:00", "23:00"]
        //     }
        // }, 'TauFveR6IQUVdBgrZq5I', '9urK4p9dtwT00CnReWa0');


        // props.createSchedule("yxs9mX5s7uCDlZUGj8Fp/locations/dOtMZAVIiUeBYnGpxEqt/broadcast", {
        //     type: {
        //         "2D Digital": ["9:00", "10:35", "11:55", "13:35", "15:15", "21:00", "23:00"]
        //     }
        // }, 'yxs9mX5s7uCDlZUGj8Fp', 'dOtMZAVIiUeBYnGpxEqt');

        //---------------------------------------------------------------------------------------

        props.createSchedule("NC1TPbD4x1NXQ5rATYaN/locations/UuhE3MKABqIXP83g7kej/broadcast/Pshi7tywwPLu9fHcTH1f/schedules", {
            "2D Digital": ["9:00", "15:00", "21:00", "23:00"],
                "3D Digital": ["9:00", "15:00", "21:00", "23:00"]
        });
        props.createSchedule("NC1TPbD4x1NXQ5rATYaN/locations/UuhE3MKABqIXP83g7kej/broadcast/blpfNZIEPaqq8oMT0S0M/schedules", {
            "2D Digital": ["9:00", "15:00", "21:00", "23:00"],
                "3D Digital": ["9:00", "15:00", "21:00", "23:00"]
        });
        props.createSchedule("NC1TPbD4x1NXQ5rATYaN/locations/tnCkfdqeOMnS4RTi9d0q/broadcast/Pshi7tywwPLu9fHcTH1f/schedules", {
            "2D Digital": ["9:00", "13:35", "15:15", "21:00", "23:00"] 
        });
        props.createSchedule("NC1TPbD4x1NXQ5rATYaN/locations/tnCkfdqeOMnS4RTi9d0q/broadcast/blpfNZIEPaqq8oMT0S0M/schedules", {
            "2D Digital": ["9:00", "13:35", "15:15", "21:00", "23:00"]
        });


        props.createSchedule("1mgNNyZeOXOjB3TsJukB/locations/Rsihq3uwMeEz5BuejifK/broadcast/Pshi7tywwPLu9fHcTH1f/schedules", {
            "2D Digital": ["9:00", "15:00", "21:00", "23:00"]
        });
        props.createSchedule("1mgNNyZeOXOjB3TsJukB/locations/Rsihq3uwMeEz5BuejifK/broadcast/blpfNZIEPaqq8oMT0S0M/schedules", {
            "2D Digital": ["9:00", "15:00", "21:00", "23:00"]
        });
        props.createSchedule("1mgNNyZeOXOjB3TsJukB/locations/YkFaQY6h5YTB9OigbtQ6/broadcast/Pshi7tywwPLu9fHcTH1f/schedules", {
            "2D Digital": ["9:00", "13:35", "15:15", "21:00", "23:00"]
        });
        props.createSchedule("1mgNNyZeOXOjB3TsJukB/locations/YkFaQY6h5YTB9OigbtQ6/broadcast/blpfNZIEPaqq8oMT0S0M/schedules", {
            "2D Digital": ["9:00", "13:35", "15:15", "21:00", "23:00"]
        });


        props.createSchedule("SrWOLSJTTzYR1xUusVrD/locations/3DLizixvgNijK559lTWc/broadcast/Pshi7tywwPLu9fHcTH1f/schedules", {
            "2D Digital": ["9:00", "10:35", "11:55", "13:35", "15:15", "21:00", "23:00"]
        });
        props.createSchedule("SrWOLSJTTzYR1xUusVrD/locations/3DLizixvgNijK559lTWc/broadcast/blpfNZIEPaqq8oMT0S0M/schedules", {
            "2D Digital": ["9:00", "10:35", "11:55", "13:35", "15:15", "21:00", "23:00"]
        });


        props.createSchedule("TauFveR6IQUVdBgrZq5I/locations/9urK4p9dtwT00CnReWa0/broadcast/Pshi7tywwPLu9fHcTH1f/schedules", {
            "2D Digital": ["9:00", "10:35", "11:55", "13:35", "15:15", "21:00", "23:00"]
        });
        props.createSchedule("yxs9mX5s7uCDlZUGj8Fp/locations/dOtMZAVIiUeBYnGpxEqt/broadcast/blpfNZIEPaqq8oMT0S0M/schedules", {
            "2D Digital": ["9:00", "10:35", "11:55", "13:35", "15:15", "21:00", "23:00"]
        });
    }


    return (
        <div>
            <h2 style={{ fontWeight: "700" }}>Insert cinema</h2>
            <form onSubmit={e => handleSubmit(e)} >
                <div className="input">
                    <label htmlFor="input-cinema">Cinema:</label>
                    <input type="text" value={cinema.cinema} onChange={e => handleInputChange(e)} name="cinema" id="input-cinema" />
                </div>
                <div className="input">
                    <label htmlFor="class-name">Class name:</label>
                    <input type="text" value={cinema.className} onChange={e => handleInputChange(e)} name="className" id="class-name" />
                </div>
                <div className="input">
                    <label htmlFor="image-cinema">Image:</label>
                    <input type="text" value={cinema.image} onChange={e => handleInputChange(e)} name="image" id="image-cinema" />
                </div>
                <input type="submit" value="Submit" />
            </form>
            <button onClick={e => handleSubmitLocation()} className="btn">add location</button>
            <button onClick={e => handleSubmitSchedule()} className="btn">add schedule</button>
            <button onClick={e => handleSubmitNews()} className="btn">add news</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        createNews: news => dispatch(addNews(news)),
        createCinema: cinema => dispatch(addCinema(cinema)),
        createLocation: (id, location) => dispatch(addLocation(id, location)),
        createSchedule: (id, schedule, sub, sub1) => dispatch(addSchedule(id, schedule, sub, sub1))
    }
}

export default connect(null, mapDispatchToProps)(AddCinema)
