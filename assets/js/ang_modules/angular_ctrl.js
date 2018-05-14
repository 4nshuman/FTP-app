app.controller('uploadCtrl', function($scope) {
    $scope.uploaderName= "not available";
    $scope.uploaderEmail= "not available";
    $scope.userCategory= "not available";
    $scope.fileName= "not available";
    $scope.fileSize= "not available";
    $scope.fileLastModifiedDate= "not available";
    $scope.fileType= "not available";
    $scope.fileCategory= "not available";
    $scope.fileExtension= "not available";

    $scope.getUploaderData=function(){
      $scope.uploaderEmail= $scope.email;
      $scope.userCategory= "NA";
      if($scope.fname && $scope.lname){
        $scope.uploaderName= $scope.fname +" "+ $scope.lname;
      }else if($scope.fname){
        $scope.uploaderName= $scope.fname;
      }else if($scope.lname){
        $scope.uploaderName= $scope.lname;
      }
      else {
        $scope.uploaderName= "not available";
      }
    }

    var music_extensions = ["3gp","8svx","aa","aac","aax","act","aiff","amr","ape","au","awb","dct","dss","dvf","flac","gsm","iklax","ivs","m4a","m4b","m4p","mmf","mp3","mpc","msv","ogg","opus","ra, rm","raw","sln","tta","vox","wav","webm","wma","wv","oga","mogg"];
    var video_extensions = ["webm","mkv","flv","flv","vob","ogv","drc","gif","gifv","mng","avi","mov","wmv","yuv","rm","rmvb","asf","amv","mp4","mpg","mpg","m4v","svi","3gp","3g2","mxf","roq","nsv","flv","ogg","f4v","f4b","f4a","f4p","mpeg","m2v","mp2","mpeg","mpe","mpv","m4p","m4v","qt"];
    var image_extensions = ["ani","anim","apng","art","bmp","bpg","bsave","cal","cin","cpc","cpt","dds","dpx","ecw","exr","fits","flic","flif","fpx","gif","hdri","hevc","icer","icns","ico","cur","ics","ilbm","jbig","jbig2","jng","jpeg","jpeg-ls","jpeg","2000","jpeg","xr","jpeg","xt","jpeg-hdr","kra","mng","miff","nrrd","ora","pam","pbm","pgm","ppm","pnm","pcx","pgf","pictor","png","psd","psb","psp","qtvr","ras","rgbe","logluv","tiff","sgi","tga","tiff","tiff","ep","tiff","it","ufo","ufp","wbmp","webp","xbm","xcf","xpm","xw"];
    var doc_extensions = ["ods","xls","xlsx","xlr","doc","docx","pdf","key","odp","pps","ppt","pptx","odt","rtf","txt","tex","wks","wpd","wps"];

    $scope.fileCategorisation = function(){
      if(music_extensions.indexOf($scope.fileExtension.toLowerCase())>=0){
        $scope.fileCategory="Music";
      }else if(video_extensions.indexOf($scope.fileExtension.toLowerCase())>=0){
        $scope.fileCategory="Video";
      }else if(image_extensions.indexOf($scope.fileExtension.toLowerCase())>=0){
        $scope.fileCategory="Image";
      }else if(doc_extensions.indexOf($scope.fileExtension.toLowerCase())>=0){
        $scope.fileCategory="Document";
      }else {
        $scope.fileCategory="Other";
      }
      $scope.getUploaderData();
    }

    //javascript functionality to get details of the file being uploaded
    $scope.getFileSize=function()
    {
     var iSize = 0;
     iSize = ($("#flUpload")[0].files[0].size / 1024);
     $scope.fileLastModifiedDate= ($("#flUpload")[0].files[0].lastModifiedDate);
     $scope.fileName= ($("#flUpload")[0].files[0].name);
     $scope.fileType= (($("#flUpload")[0].files[0].type) == "" ? "Not Available" : ($("#flUpload")[0].files[0].type));
     $scope.fileExtension= (($("#flUpload")[0].files[0].name).substr($("#flUpload")[0].files[0].name.lastIndexOf('.')+1));

     if (iSize / 1024 > 1){
       if (((iSize / 1024) / 1024) > 1){
         iSize = (Math.round(((iSize / 1024) / 1024) * 100) / 100);
         $scope.fileSize= iSize + "Gb";
       }else{
         iSize = (Math.round((iSize / 1024) * 100) / 100);
         $scope.fileSize= iSize + "Mb";
       }
     }else{
       iSize = (Math.round(iSize * 100) / 100);
       $scope.fileSize= iSize  + "kb";
     }
     $scope.fileCategorisation();
   };
});
