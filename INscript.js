

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

async function insertionSort() {
  const arrayContainer = document.getElementById('arrayContainer');
  for (let i = 1; i < array.length && !stopSortingFlag; i++) {
    let current = array[i];
    let j = i - 1;
    const bars = arrayContainer.querySelectorAll('.bar');
    bars[i].style.backgroundColor = 'gray';
    while (j >= 0 && array[j] > current && !stopSortingFlag) {
      array[j + 1] = array[j];
      arrayContainer.innerHTML = '';
      array.forEach(value => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value * 3}px`;
        arrayContainer.appendChild(bar);
      });
      bars[j + 1].style.backgroundColor = 'black';
      j--;
      await new Promise(resolve => setTimeout(resolve, 100 - document.getElementById('speedRange').value));
    }
    array[j + 1] = current;
    arrayContainer.innerHTML = '';
    array.forEach(value => {
      const bar = document.createElement('div');
      bar.classList.add('bar');
      bar.style.height = `${value * 3}px`;
      arrayContainer.appendChild(bar);
    });
    bars[i].style.backgroundColor = 'black';
  }
}

function startSorting() {
  stopSortingFlag = false;
  insertionSort();
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
      contentDiv.innerHTML = "<p></p><pre><code class=\"language-c\">// C program for insertion sort\n\n#include &lt;stdio.h&gt;\nvoid insertionSort(int arr[], int n) {\n    int i, key, j;\n    for (i = 1; i &lt; n; i++) {\n        key = arr[i];\n        j = i - 1;\n        while (j &gt;= 0 && arr[j] &gt; key) {\n            arr[j + 1] = arr[j];\n            j = j - 1;\n        }\n        arr[j + 1] = key;\n    }\n}\n</code></pre>";
      break;
    case 'cpp':
      contentDiv.innerHTML = "<p></p><pre><code class=\"language-cpp\">// C++ program for insertion sort\n\n#include &lt;iostream&gt;\nusing namespace std;\nvoid insertionSort(int arr[], int n) {\n    int i, key, j;\n    for (i = 1; i &lt; n; i++) {\n        key = arr[i];\n        j = i - 1;\n        while (j &gt;= 0 && arr[j] &gt; key) {\n            arr[j + 1] = arr[j];\n            j = j - 1;\n        }\n        arr[j + 1] = key;\n    }\n}\n</code></pre>";
      break;
    case 'java':
      contentDiv.innerHTML = "<p></p><pre><code class=\"language-java\">// Java program for insertion sort\n\npublic class InsertionSort {\n    void insertionSort(int arr[]) {\n        int n = arr.length;\n        for (int i = 1; i &lt; n; i++) {\n            int key = arr[i];\n            int j = i - 1;\n            while (j &gt;= 0 && arr[j] &gt; key) {\n                arr[j + 1] = arr[j];\n                j = j - 1;\n            }\n            arr[j + 1] = key;\n        }\n    }\n}\n</code></pre>";
      break;
    case 'python':
      contentDiv.innerHTML = "<p></p><pre><code class=\"language-python\"># Python program for insertion sort\n\ndef insertionSort(arr):\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i - 1\n        while j &gt;= 0 and key &lt; arr[j]:\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = key\n</code></pre>";
      break;
    case 'javascript':
      contentDiv.innerHTML = "<p></p><pre><code class=\"language-javascript\">// JavaScript program for insertion sort\n\nfunction insertionSort(arr) {\n    for (let i = 1; i &lt; arr.length; i++) {\n        let key = arr[i];\n        let j = i - 1;\n        while (j &gt;= 0 && arr[j] &gt; key) {\n            arr[j + 1] = arr[j];\n            j = j - 1;\n        }\n        arr[j + 1] = key;\n    }\n    return arr;\n}\n</code></pre>";
      break;
    default:
      contentDiv.innerHTML = "<p>Please select a programming language.</p>";
      break;
  }
}

