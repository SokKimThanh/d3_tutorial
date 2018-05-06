let crud_trac_nghiem_tinh_cach_ctrl = function ($scope, $timeout, $uibModalInstance, items) {
    // $scope.dsch = getdanhsach_cauhoi($scope.danhsach_cauhoi);
    let danhsachketqua = [
        { id: 1, code: "R", name: "Realistic (Doers)" },
        { id: 2, code: "I", name: "Investigative (Thinkers)" },
        { id: 3, code: "A", name: "Artistic (Creators)" },
        { id: 4, code: "S", name: "Social  (Helpers)" },
        { id: 5, code: "E", name: "Enterprising  (Persuaders)" },
        { id: 6, code: "C", name: "Conventional  (Organizers)" },
    ]
    let danhsach_nghenghiep = [
        {
            "code": "R",
            "list": [
                {
                    "name": "Aerospace/Aeronautical Engineer (with Investigative)[14]",
                },
                {
                    "name": "Agriculture[15]",
                },
                {
                    "name": "Animals[14]",
                },
                {
                    "name": "Anthropology/Paleontology (with Investigative)[14]",
                },
                {
                    "name": "Architect (with Artistic and Enterprising)[15]",
                },
                {
                    "name": "Astronomy (with Investigative)[14]",
                },
                {
                    "name": "Athletics[16][14]",
                },
                {
                    "name": "Carpenter (with Conventional and Investigative)[15]",
                },
                {
                    "name": "Culinary arts (with Artistic and Enterprising)[17]",
                },
                {
                    "name": "Chemistry/Chemist (with Investigative and Conventional)[15]",
                },
                {
                    "name": "Computer engineering/Computer science/Information technology/Computer programmer (with Investigative and Conventional)[15][16]",
                },
                {
                    "name": "Dance (with Artistic)[14]",
                },
                {
                    "name": "Dentist (with Investigative and Social)[15]",
                },
                {
                    "name": "Engineer (with Investigative and Conventional)[15][16]",
                },
                {
                    "name": "Environmental science[14]",
                },
                {
                    "name": "Fashion design (with Artistic and Enterprising)[15]",
                },
                {
                    "name": "Fine Artist Including Painter Sculptor and Illustrator (with Artistic)[18]",
                },
                {
                    "name": "Firefighter (with Social and Enterprising)[15]",
                },
                {
                    "name": "Graphic designer (with Artistic and Enterprising)[15]",
                },
                {
                    "name": "Interior design (with Artistic)[14]",
                },
                {
                    "name": "Model (people) (with Artistic and Enterprising)[15]",
                },
                {
                    "name": "Musician (with Artistic and Enterprising)[15]",
                },
                {
                    "name": "Nurse (with Social Conventional and Investigative)[15][16]",
                },
                {
                    "name": "Outdoor recreation[16][14]",
                },
                {
                    "name": "Park Naturalist (with Social and Artistic)[15]",
                },
                {
                    "name": "Personal trainer (with Enterprising and Social)[15]",
                },
                {
                    "name": "Photographer (with Artistic and Enterprising)[15]",
                },
                {
                    "name": "Physical therapy (with Social and Investigative)[15]",
                },
                {
                    "name": "Driver[15]",
                },
                {
                    "name": "Surgeon (with Investigative and Social)[15]",
                },
                {
                    "name": "Veterinarian (with Investigative and Social)[15]",
                },
                {
                    "name": "Web developer (with ConventionalArtistic ",
                },
                {
                    "name": "Zoologists and Wildlife Biologists (with Investigative)[15]",
                }
            ],
        },
        {
            "code": "I",
            "list": [
                {
                    "name": "Actuary(with Conventional and Enterprising)[15][16]",
                },
                {
                    "name": "Archivist/Librarian (with Social and Conventional)[15]",
                },
                {
                    "name": "Biostatistics/Masters in Public Health (with Conventional)[19]",
                },
                {
                    "name": "Carpenter (with Conventional and Realistic)[15]",
                },
                {
                    "name": "Chemistry/Chemist (with Realistic and Conventional)[15][16]",
                },
                {
                    "name": "Community Health Workers/Masters in Public Health (with social and enterprising)[20]",
                },
                {
                    "name": "Computer engineering/Computer science/Information technology/Computer programmer (with Realistic and Conventional)[15][16]",
                },
                {
                    "name": "Counselor (with Social and Artistic)[15][16]",
                },
                {
                    "name": "Dentist (with Realistic and Social)[15]",
                },
                {
                    "name": "Dietitian/Nutritionist (with Social and Enterprising)[15]",
                },
                {
                    "name": "Economics (with Conventional and social)[14]",
                },
                {
                    "name": "Engineer (with Realistic and Conventional)[15][16]",
                },
                {
                    "name": "Epidemiology/Masters in Public Health (with Social)[21]",
                },
                {
                    "name": "Finance (with Enterprising and Conventional)[15][16]",
                },
                {
                    "name": "Lawyer (with Enterprising and Social)[14][15]",
                },
                {
                    "name": "Mathematician (with Artistic)",
                },
                {
                    "name": "Nurse (with Realistic Conventional and Social)[15][16]",
                },
                {
                    "name": "Pharmacist (with Social and Conventional)",
                },
                {
                    "name": "Physical therapy (with Social and Realistic)[15]",
                },
                {
                    "name": "Physician (Medical school/Medical research) (with Social)[15][16]",
                },
                {
                    "name": "Physics[16]",
                },
                {
                    "name": "Poets Lyricists and Creative Writers (with Artistic)[22]",
                },
                {
                    "name": "Professor/Research - Ph.D.[16][14]",
                },
                {
                    "name": "Psychology/Psychologist (with Social and Artistic)[15][16]",
                },
                {
                    "name": "Social Work[15]",
                },
                {
                    "name": "Surgeon (with Realistic and Social)[15]",
                },
                {
                    "name": "Technical writer (with Artistic and Conventional)[15]",
                },
                {
                    "name": "Tutor (with Social)[23]",
                },
                {
                    "name": "Veterinarian (with Realistic and Social)[15]",
                },
                {
                    "name": "Web developer (with Conventional Realistic and Artistic)[15]",
                },
                {
                    "name": "Zoologists and Wildlife Biologists(with Realistic)[15]",
                }
            ],
        },
        {
            "code": "A",
            "list": [
                {
                    "name": "Architect (with Realistic and Enterprising)[15]",
                },
                {
                    "name": "Broadcast journalism (with Enterprising)[15]",
                },
                {
                    "name": "Clergy (with Social and Enterprising)[15]",
                },
                {
                    "name": "Counselor (with Investigative and Social)[15][16]",
                },
                {
                    "name": "Culinary arts (with Realistic and Enterprising)[17][24]",
                },
                {
                    "name": "Dance (with Realistic)[14]",
                },
                {
                    "name": "Fashion design (with Realistic and Enterprising)[15]",
                },
                {
                    "name": "Fine Artist Including Painter Sculptor and Illustrator (with Realistic)[18]",
                },
                {
                    "name": "Graphic designer (with Enterprising and Realistic)[15]",
                },
                {
                    "name": "Interior design(with Realistic)[14]",
                },
                {
                    "name": "Model (people) (with Realistic and Enterprising)[15]",
                },
                {
                    "name": "Musician (with Enterprising and Realistic)[15]",
                },
                {
                    "name": "Park Naturalist (with Social and Realistic)[15]",
                },
                {
                    "name": "Poets Lyricists and Creative Writers (with Investigative)[22]",
                },
                {
                    "name": "Psychology/Psychologist (with Social and Investigative); Art therapist/Dance therapy/Drama therapy/Music therapy (with social)[15][16]",
                },
                {
                    "name": "Public relations (with Enterprising)[15]",
                },
                {
                    "name": "Photographer (with Realistic and Enterprising)[15]",
                },
                {
                    "name": "Teacher (with Social)[15][16]",
                },
                {
                    "name": "Technical writer (with Investigative and Conventional)[15]",
                },
                {
                    "name": "Trainer (business) (with Social and Conventional)[15]",
                },
                {
                    "name": "Web developer (with Conventional Realistic and Investigative)[15]",
                }
            ],
        },
        {
            "code": "S",
            "list": [
                {
                    "name": "Archivist/Librarian (with Conventional and Investigative)[15]",
                },
                {
                    "name": "Clergy (with Artistic and Enterprising)[15]",
                },
                {
                    "name": "Community Organizer[16]",
                },
                {
                    "name": "Community Health Workers/Masters in Public Health (with Investigative and Enterprising)[20]",
                },
                {
                    "name": "Counselor (with Investigative and Artistic)[15][16]",
                },
                {
                    "name": "Customer service (with Conventional and Enterprising)[15]",
                },
                {
                    "name": "Dentist (with Investigative and Realistic)[15]",
                },
                {
                    "name": "Dietitian/Nutritionist (with Investigative and Enterprising)[15]",
                },
                {
                    "name": "Economics (with Investigative and Conventional)[14]",
                },
                {
                    "name": "Education (Teacher/Counselor/Administration)",
                },
                {
                    "name": "Educational administration (with Enterprising and Conventional)[15]",
                },
                {
                    "name": "Epidemiology/Masters in Public Health (with Investigative)[21]",
                },
                {
                    "name": "Firefighter (with Realistic and Enterprising)[15]",
                },
                {
                    "name": "Fitness Trainer and Aerobics Teacher (with Enterprising and Realistic)[15]",
                },
                {
                    "name": "Foreign Service/Diplomacy (with Enterprising and Artistic)[25]",
                },
                {
                    "name": "Human Resources (with Conventional and Enterprising)[15]",
                },
                {
                    "name": "Lawyer (with Investigative and Enterprising)[14][15]",
                },
                {
                    "name": "Nurse (with Realistic Conventional and Investigative)[15][16]",
                },
                {
                    "name": "Park Naturalist (with Realistic and Artistic)[15]",
                },
                {
                    "name": "Pharmacist (with Investigative and Conventional)[15]",
                },
                {
                    "name": "Physical therapy (with Realistic and Investigative)[15]",
                },
                {
                    "name": "Physician (Medical school/Medical research) (with Investigative)[15][16]",
                },
                {
                    "name": "Psychology/Psychologist (with Investigative and Artistic)[15][16]",
                },
                {
                    "name": "Public Health Educator/Masters in Public Health (with Enterprising)[26]",
                },
                {
                    "name": "Religion[14]",
                },
                {
                    "name": "Social Advocate[16]",
                },
                {
                    "name": "Sociology[16]",
                },
                {
                    "name": "Social Work[15]",
                },
                {
                    "name": "Surgeon (with Realistic and Investigative)[15]",
                },
                {
                    "name": "Teacher (Early childhood education Primary school Secondary school Teaching English as a second language Special Ed and Substitute teaching) (with Artistic)[15][16][27]",
                },
                {
                    "name": "Trainer (business) (with Artistic and Conventional)[15]",
                },
                {
                    "name": "Tutor (with Investigative)[23]",
                },
                {
                    "name": "Veterinarian (with Investigative and Realistic)[15]",
                }
            ],
        },
        {
            "code": "E",
            "list": [
                {
                    "name": "Actuary (with Investigative and Conventional)[15][16]"
                },
                {
                    "name": "Architect (with Artistic and Realistic)[15]"
                },
                {
                    "name": "Buyer[16]"
                },
                {
                    "name": "Community Health Workers/Masters in Public Health (with Investigative and Social)[20]"
                },
                {
                    "name": "Culinary arts (with Artistic and Realistic)[17]"
                },
                {
                    "name": "Clergy (with Artistic and Social)[15]"
                },
                {
                    "name": "Customer service (with Conventional and Social)[15]"
                },
                {
                    "name": "Dietitian/Nutritionist (with Social and Investigative)[15]"
                },
                {
                    "name": "Educational administration (with Social and Conventional)[15]"
                },
                {
                    "name": "Entrepreneur and Business[16]"
                },
                {
                    "name": "Fashion design (with Artistic and Realistic)[15]"
                },
                {
                    "name": "Finance (with Conventional and Investigative)[15][16]"
                },
                {
                    "name": "Foreign Service/Diplomacy (with Social and Artistic)[25]"
                },
                {
                    "name": "Firefighter (with Social and Realistic)[15]"
                },
                {
                    "name": "Fitness Trainer and Aerobics Teacher (with Realistic and Social)[15]"
                },
                {
                    "name": "Fundraising[16]"
                },
                {
                    "name": "Graphic designer (with Artistic and Realistic)[15]"
                },
                {
                    "name": "Human Resources (with Conventional and Social)[15]"
                },
                {
                    "name": "Broadcast journalism (with Artistic)[15]"
                },
                {
                    "name": "Lawyer (with Investigative and Social)[14][15]"
                },
                {
                    "name": "Management/Management Consultant[16]"
                },
                {
                    "name": "Market Research Analyst (with Investigative)[28][16]"
                },
                {
                    "name": "Model (people) (with Artistic and Realistic)[15]"
                },
                {
                    "name": "Musician (with Artistic and Realistic)[15]"
                },
                {
                    "name": "Photographer (with Artistic and Realistic)[15]"
                },
                {
                    "name": "Politics[14]"
                },
                {
                    "name": "Public Health Educator/Masters in Public Health (with Social)[26]"
                },
                {
                    "name": "Public relations/Publicity/Advertising/Marketing (with Artistic)[15]"
                },
                {
                    "name": "Public speaking[24]"
                },
                {
                    "name": "Real Estate Agent (with Conventional)[15][16]"
                },
                {
                    "name": "Sales (with Conventional and Social)[15]"
                }
            ],
        },
        {
            "code": "C",
            "list": [
                {
                    "name": "Accounting/Tax advisor (with Enterprising)[15][16]",
                },
                {
                    "name": "Actuary (with Investigative and Enterprising)[15][16]",
                },
                {
                    "name": "Archivist/Librarian (with Social and Investigative)[15]",
                },
                {
                    "name": "Biostatistics/Masters in Public Health (with Investigative)[19]",
                },
                {
                    "name": "Carpenter (with Realistic and Investigative)[15]",
                },
                {
                    "name": "Chemistry/Chemist (with Investigative and Realistic)[15]",
                },
                {
                    "name": "Computer engineering/Computer science/Information technology/Computer programmer (with Investigative and Realistic)[15][16]",
                },
                {
                    "name": "Customer service (with Enterprising and Social)[15]",
                },
                {
                    "name": "Economics (with Investigative and Social)[14]",
                },
                {
                    "name": "Educational administration (with Social and Enterprising)[15]",
                },
                {
                    "name": "Engineer (with Investigative and Realistic)[15][16]",
                },
                {
                    "name": "Finance (with Enterprising and Investigative)[15][16]",
                },
                {
                    "name": "Human Resources (with Enterprising and Social)[15]",
                },
                {
                    "name": "Math teacher (with Social)[16]",
                },
                {
                    "name": "Nurse (with Realistic C Social 1 and Investigative)[15][16]",
                },
                {
                    "name": "Office administration (with Enterprising)[15]",
                },
                {
                    "name": "Pharmacist (with Social and Investigative)C[15]",
                },
                {
                    "name": "Real Estate Agent (with Enterprising)[15][16]",
                },
                {
                    "name": "Statistician(with Realistic and Investigative)[15]",
                },
                {
                    "name": "Technical writer (with Artistic and Investigative)[15]",
                },
                {
                    "name": "Trainer (business) (with Social and Artistic)[15]",
                },
                {
                    "name": "Web developer (with ArtisticC Realistic and Investigative)[15]",
                }
            ]
        }
    ]

    function indexOfMax(arr) {
        if (arr.length === 0) {
            return -1;
        }
        var max = arr[0];
        var maxIndex = 0;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }
        return maxIndex;
    }
    $scope.vebieudo = (newarr_tongdiem) => {
        if (utility.checkValue(newarr_tongdiem)) {
            $scope.list_name = [];
            $scope.list_code = [];
            $scope.tongdiemdothi = [];
            $scope.danhsachnghenghiep = [];

            for (x in danhsachketqua) {
                let obj = danhsachketqua[x];
                $scope.list_name.push(obj.name);
                $scope.list_code.push(obj.code);
            }
            for (x in newarr_tongdiem) {
                let obj = newarr_tongdiem[x];
                $scope.tongdiemdothi.push(obj.value)
            }
            let max = $scope.tongdiemdothi.reduce(function (a, b) {
                return Math.max(a, b);
            });
            $scope.max_index = indexOfMax($scope.tongdiemdothi);
            /* get danh sach nghe nghiep */
            $scope.danhsachnghenghiep = danhsach_nghenghiep[$scope.max_index]
            let options = {
                chart: {
                    polar: true,
                    type: 'line'
                },

                title: {
                    text: "Nhóm: " + $scope.danhsachnghenghiep.code
                },
                xAxis: {
                    categories: $scope.list_name,
                    tickmarkPlacement: 'on',
                    lineWidth: 0
                },

                yAxis: {
                    gridLineInterpolation: 'polygon',
                    lineWidth: 0,
                    min: 0,
                    max: max
                },


                legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    y: 70,
                    layout: 'vertical'
                },

                series: [
                    {
                        name: 'Result',
                        data: $scope.tongdiemdothi,
                        pointPlacement: 'on'
                    },

                ]
            }
            Highcharts.chart('div_chart', options);
        } else {
            alert("no data")
        }
    }
    $scope.xemtinhcach = () => {
        $scope.vebieudo(items);

    }
    $scope.xemnghenghiep = () => {
        $scope.duochienthi = false;
        $scope.xemtinhcach();
        if (utility.checkValue($scope.danhsachnghenghiep)) {
            $timeout(function () {
                $scope.duochienthi = true;
                $('#tablenghenghiep').DataTable();
            }, 256)
        } else {
            alert("no data")
        }
    }
    $scope.cancel = function () {
        $uibModalInstance.close();
    };
}