module.exports = function(grunt) {
    // Carregar as tarefas necessárias
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Configuração das tarefas
    grunt.initConfig({
        less: {
            development: {
                files: {
                    "dist/css/style.css": "src/less/main.less" // Caminho de entrada e saída
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/js/script.min.js': ['src/js/*.js'] // Caminho de entrada e saída
                }
            }
        }
    });

    // Registre as tarefas
    grunt.registerTask('default', ['less', 'uglify']);
};
