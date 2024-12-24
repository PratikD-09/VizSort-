

let array = [];
let stopSortingFlag = false;



function generateArray(size) {
  const arrayContainer = document.getElementById('arrayContainer');
  arrayContainer.innerHTML = '';
  for (let i = 0; i < size; i++) {
    const value = Math.floor(Math.random() * 100) + 1;
    array.push(value);
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value * 3}px`;
    arrayContainer.appendChild(bar);
  }
}
generateArray(40);

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

async function bubbleSort() {
  const arrayContainer = document.getElementById('arrayContainer');
  for (let i = 0; i < array.length - 1 && !stopSortingFlag; i++) {
    for (let j = 0; j < array.length - i - 1 && !stopSortingFlag; j++) {
      const bars = arrayContainer.querySelectorAll('.bar');
      bars[j].style.backgroundColor = 'black';
      bars[j + 1].style.backgroundColor = 'gray';
      await new Promise(resolve => setTimeout(resolve, 100 - document.getElementById('speedRange').value));
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        arrayContainer.innerHTML = '';
        array.forEach(value => {
          const bar = document.createElement('div');
          bar.classList.add('bar');
          bar.style.height = `${value * 3}px`;
          arrayContainer.appendChild(bar);
        });
      }
      bars[j].style.backgroundColor = 'black';
      bars[j + 1].style.backgroundColor = 'black';
    }
  }
}

function startSorting() {
  stopSortingFlag = false;
  bubbleSort();
}

function stopSorting() {
  stopSortingFlag = true;
}

function resetArray() {
  stopSortingFlag = true;
  array = [];
  const size = parseInt(document.getElementById('arraySizeInput').value);
  generateArray(size);
}


function fn()
{
  
  document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0";
  })

}
fn();
function fn1()
{
  
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-100%";
  })

}
fn1();





// algorethem Menu


function showContent(language) {
  let contentDiv = document.getElementById('content');
  switch (language) {
      case 'c':
          contentDiv.innerHTML = "<p></p><pre><code class=\"language-c\">// C program for bubble sort\n\n#include &lt;stdio.h&gt;\nvoid bubbleSort(int arr[], int n) {\n    int i, j, temp;\n    for (i = 0; i &lt; n-1; i++)\n        for (j = 0; j &lt; n-i-1; j++)\n            if (arr[j] &gt; arr[j+1]) {\n                temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n}\n</code></pre>";
          break;
      case 'cpp':
          contentDiv.innerHTML = "<p></p><pre><code class=\"language-cpp\">// C++ program for bubble sort\n\n#include &lt;iostream&gt;\nusing namespace std;\nvoid bubbleSort(int arr[], int n) {\n    int i, j, temp;\n    for (i = 0; i &lt; n-1; i++)\n        for (j = 0; j &lt; n-i-1; j++)\n            if (arr[j] &gt; arr[j+1]) {\n                temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n}\n</code></pre>";
          break;
      case 'java':
          contentDiv.innerHTML = "<p></p><pre><code class=\"language-java\">// Java program for bubble sort\n\npublic class BubbleSort {\n    void bubbleSort(int arr[]) {\n        int n = arr.length;\n        for (int i = 0; i &lt; n-1; i++)\n            for (int j = 0; j &lt; n-i-1; j++)\n                if (arr[j] &gt; arr[j+1]) {\n                    int temp = arr[j];\n                    arr[j] = arr[j+1];\n                    arr[j+1] = temp;\n                }\n    }\n}\n</code></pre>";
          break;
      case 'python':
          contentDiv.innerHTML = "<p></p><pre><code class=\"language-python\"># Python program for bubble sort\n\ndef bubbleSort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if arr[j] &gt; arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n</code></pre>";
          break;
      case 'javascript':
          contentDiv.innerHTML = "<p></p><pre><code class=\"language-javascript\">// JavaScript program for bubble sort\n\nfunction bubbleSort(arr) {\n  let len = arr.length;\n    for (let i = 0; i &lt; len; i++) {\n        for (let j = 0; j &lt; len - 1; j++) {\n            if (arr[j] &gt; arr[j + 1]) {\n                let temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n    return arr;\n}\n</code></pre>";
          break;
      default:
          contentDiv.innerHTML = "<p>Please select a programming language.</p>";
          break;
  }
}

