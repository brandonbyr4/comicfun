import Head from 'next/head'
import Image from 'next/image'
import { useState, useRef, useEffect }  from 'react'
import DashboardLayout from '../components/layouts/dashboard-layout'

export default function Tool() {
    const [photoBoothMode, setPhotoBoothMode] = useState(false)
    const [image, setImage] = useState(null)
    const [imageURL, setImageURL] = useState(null)
    const videoRef = useRef(null)
    
    const loadPhotoBooth = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({video: true})
            videoRef.current.srcObject = stream
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        loadPhotoBooth()
    }, [photoBoothMode])

    
    const convertImageToFile = (imgUrl) => {
        const bytes = imgUrl.split(',')[0].indexOf('base64') >= 0 && imgUrl.split(',')[1]
        const mime = imgUrl.split(',')[0].split(':')[1].split(';')[0]
        const max = bytes.length
        let ia = new Uint8Array(max)
        let fileType = ""
        for (let i = 0; i < max; i++) {
            ia[i] = bytes.charCodeAt(i)
        }
        if(mime.includes("png")) {
            fileType = ".png"
        } else {
            fileType = ".jpg"
        }
        const newFile = new File([ia], `upload${fileType}`, { type: mime })
        return (newFile)
    }

    const posterize = (imgData, levels) => {
        var numLevels = parseInt(levels,10) || 1
        var data = imgData.data
      
        numLevels = Math.max(2, Math.min(256, numLevels))
      
        var numAreas = 256 / numLevels
        var numValues = 255 / (numLevels-1)
      
        var rect = imgData
        var w = rect.width
        var h = rect.height
        var w4 = w*4
        var y = h
        do {
          var offsetY = (y-1)*w4
          var x = w
           do {
            var offset = offsetY + (x-1)*4
      
            var r = numValues * ((data[offset] / numAreas)>>0)
            var g = numValues * ((data[offset+1] / numAreas)>>0)
            var b = numValues * ((data[offset+2] / numAreas)>>0)
    
            if (r > 255) r = 255
            if (g > 255) g = 255
            if (b > 255) b = 255
      
            data[offset] = r
            data[offset+1] = g
            data[offset+2] = b
      
          } while (--x)
        } while (--y)
        return imgData
    }

    const oilPaintEffect = (canvas, radius, intensity) => {
        const width = canvas.width
        const height = canvas.height
        const pixData = canvas.getContext("2d").getImageData(0, 0, width, height).data
           
        const destCanvas = document.createElement("canvas")
        let dCtx = destCanvas.getContext("2d"),
        pixelIntensityCount = [];
        
        destCanvas.width = width;
        destCanvas.height = height;
        
        var destImageData = dCtx.createImageData(width, height),
            destPixData = destImageData.data,
            intensityLUT = [],
            rgbLUT = [];
        
        for (var y = 0; y < height; y++) {
            intensityLUT[y] = [];
            rgbLUT[y] = [];
            for (var x = 0; x < width; x++) {
                var idx = (y * width + x) * 4,
                    r = pixData[idx],
                    g = pixData[idx + 1],
                    b = pixData[idx + 2],
                    avg = (r + g + b) / 3;
                
                intensityLUT[y][x] = Math.round((avg * intensity) / 255);
                rgbLUT[y][x] = {
                    r: r,
                    g: g,
                    b: b
                };
            }
        }
        
        
        for (y = 0; y < height; y++) {
            for (x = 0; x < width; x++) {
                pixelIntensityCount = [];
                
                // Find intensities of nearest pixels within radius.
                for (var yy = -radius; yy <= radius; yy++) {
                    for (var xx = -radius; xx <= radius; xx++) {
                      if (y + yy > 0 && y + yy < height && x + xx > 0 && x + xx < width) {
                          var intensityVal = intensityLUT[y + yy][x + xx];
    
                          if (!pixelIntensityCount[intensityVal]) {
                              pixelIntensityCount[intensityVal] = {
                                  val: 1,
                                  r: rgbLUT[y + yy][x + xx].r,
                                  g: rgbLUT[y + yy][x + xx].g,
                                  b: rgbLUT[y + yy][x + xx].b
                              }
                          } else {
                              pixelIntensityCount[intensityVal].val++;
                              pixelIntensityCount[intensityVal].r += rgbLUT[y + yy][x + xx].r;
                              pixelIntensityCount[intensityVal].g += rgbLUT[y + yy][x + xx].g;
                              pixelIntensityCount[intensityVal].b += rgbLUT[y + yy][x + xx].b;
                          }
                      }
                    }
                }
                
                pixelIntensityCount.sort(function (a, b) {
                    return b.val - a.val;
                });
                
                var curMax = pixelIntensityCount[0].val,
                    dIdx = (y * width + x) * 4;
                
                destPixData[dIdx] = ~~ (pixelIntensityCount[0].r / curMax);
                destPixData[dIdx + 1] = ~~ (pixelIntensityCount[0].g / curMax);
                destPixData[dIdx + 2] = ~~ (pixelIntensityCount[0].b / curMax);
                destPixData[dIdx + 3] = 255;
            }
        }
        
        canvas.getContext("2d").putImageData(destImageData, 0, 0);
    }

    const takeSelfie = () => {
        const canvas = document.createElement("canvas")
        canvas.setAttribute("id", "export-canvas")
        canvas.width = videoRef.current.clientWidth
        canvas.height = videoRef.current.clientHeight
        canvas.getContext("2d").drawImage(videoRef.current, 0, 0, canvas.width, canvas.height)

        // Applying filters
        let imgData = canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height)
        canvas.getContext("2d").putImageData(posterize(imgData, 10), 0, 0)
        oilPaintEffect(canvas, 4, 25)
        
        // Saving to preview
        const imgUrl = canvas.toDataURL()
        setImageURL(imgUrl)
        setImage(convertImageToFile(imgUrl))
    }
    

    const localUpload = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0]
            const canvas = document.createElement("canvas")
            const tempImage = document.createElement('img')
            canvas.setAttribute("id", "export-canvas")
            tempImage.src = URL.createObjectURL(i)
            tempImage.onload = function() {
                canvas.width = tempImage.width
                canvas.height = tempImage.height
                canvas.getContext("2d").drawImage(tempImage, 0, 0, canvas.width, canvas.height)
                
                // Applying filters
                let imgData = canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height)
                canvas.getContext("2d").putImageData(posterize(imgData, 10), 0, 0)
                oilPaintEffect(canvas, 4, 25)
                
                // Saving to preview
                const imgUrl = canvas.toDataURL()
                setImageURL(imgUrl)
                setImage(convertImageToFile(imgUrl))
            }
        }
    }

    const downloadPortrait = (event) => {
        event.preventDefault()
        if (image) {
            let link = document.createElement("a")
            link.download = "cartoonified"
            link.href = imageURL
            link.click()
        } else {
            alert("Please select a photo to begin.")
        }
    }

    const chooseAgain = () => {
        setImage(null)
        setImageURL(null)
        loadPhotoBooth()
    }

    return (
        <div>
            <Head>
                <title>ComicFun | Cartoonify yourself for free!</title>
            </Head>

            <main>
                <DashboardLayout content={
                    <div className="md:flex md:h-full">
                        {!image ? <>{!photoBoothMode ? <div className="flex flex-col xl:w-[calc(100%-24rem)] lg:w-[calc(100%-20rem)] md:w-[calc(100%-18rem)] w-full" >
                            <p className="py-3 px-8 bg-violet-500 text-sm text-white">
                                After selecting a photo, please allow up to 3-5 seconds for the filters to process.
                            </p>
                            <label htmlFor="take-photo" className="flex justify-center items-center px-3 md:h-80 h-52 border-b border-gray-300 outline-gray-900 -outline-offset-2 hover:bg-gray-100 hover:outline-dotted cursor-pointer transition">
                                <div className="text-center">
                                    <h1 className="md:text-3xl text-2xl font-semibold text-gray-900 mb-4">
                                        <svg className="inline-block w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                        </svg>
                                        Take a photo
                                    </h1>
                                    <p className="text-gray-500">
                                        Use your device camera to take a photo
                                    </p>
                                    <button aria-label="take a photo" id="take-photo" type="button" onClick={() => setPhotoBoothMode(true)} className="hidden">selfie</button>
                                </div>
                            </label>
                            <label htmlFor="upload-photo" className="flex justify-center items-center md:h-full h-72 px-3 outline-gray-900 -outline-offset-2 hover:bg-gray-100 hover:outline-dotted cursor-pointer transition">
                                <div className="text-center">
                                    <h2 className="md:text-3xl text-2xl font-semibold text-gray-900 mb-4">
                                        Or upload an image
                                    </h2>
                                    <p className="text-gray-500">
                                        drag and drop an image here to upload automatically
                                    </p>
                                    <input id="upload-photo" type="file" accept="image/png, image/jpeg" onChange={localUpload} className="hidden" />
                                </div>
                            </label>
                        </div> : <>
                            <div className="flex flex-col xl:w-[calc(100%-24rem)] lg:w-[calc(100%-20rem)] md:w-[calc(100%-18rem)] w-full overflow-hidden" >
                                <div className="flex h-full w-full">
                                    <button aria-label="back" onClick={() => setPhotoBoothMode(false)} className="px-4 py-4 bg-white text-gray-900 hover:bg-gray-100 border-r border-gray-300 transition">
                                        Back
                                    </button>
                                    <button aria-label="back" onClick={() => takeSelfie()} className="w-full px-4 py-4 text-gray-900 hover:bg-gray-100 transition">
                                        Take Photo
                                    </button>
                                </div>
                                <div className="h-[fit] pb-2 bg-violet-500">
                                    <video id="video" ref={videoRef} className="w-full h-full" autoPlay />
                                </div>
                            </div>
                        </>}</> : <div className="flex flex-col xl:w-[calc(100%-24rem)] lg:w-[calc(100%-20rem)] md:w-[calc(100%-18rem)] w-full">
                            <div className="p-10 h-full">
                                <h4 className="text-3xl font-semibold text-gray-900 mb-4">
                                    Image uploaded
                                </h4>
                                <button aria-label="choose another photo" type="button" onClick={() => chooseAgain()} className="flex items-center gap-2 text-blue-500 underline mb-4">
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                    </svg>
                                    back
                                </button>
                                <div className="max-w-xl">
                                    <Image src={imageURL} width={1000} height={1000} alt="Image preview" />
                                </div>
                            </div>
                        </div>}
                        <div className="relative xl:w-96 lg:w-80 md:w-72 w-full bg-gray-900">
                            <form onSubmit={(event) => downloadPortrait(event)} className="flex flex-col justify-between md:max-h-96 h-full md:py-8 py-14 px-8 md:space-y-6 space-y-16">
                                <h3 className="text-2xl font-semibold text-white">
                                    Export
                                </h3>
                                <div>
                                    <input type="email" placeholder="your email adress..." className="bg-gray-900 text-white border-b border-gray-500 mb-6" required />
                                    <button aria-label="Download Portrait image" type="submit" className="w-full p-3 bg-violet-500 hover:bg-violet-400 text-white text-center rounded transition">
                                        Download Portrait
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                } />
            </main>
        </div>
    )
}
